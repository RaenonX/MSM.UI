import React from 'react';

import useResizeObserver from 'use-resize-observer';

import {Dropdown} from '@/components/input/dropdown/main';
import {InputField} from '@/components/input/field';
import {FullWidthRow} from '@/components/layout/fullWidthRow';
import {PxChartArea} from '@/components/pages/main/chartArea';
import {useApiRequests} from '@/components/pages/main/hooks';
import {PxChartInfo} from '@/components/pages/main/info/main';
import {ChartRequestState} from '@/components/pages/main/type';
import {errorDispatchers} from '@/state/error/dispatchers';
import {ErrorDispatcherName} from '@/state/error/types';
import {useDispatch} from '@/state/store';
import {classNames} from '@/utils/react';


export const Main = () => {
  const dispatch = useDispatch();

  const {ref, width, height} = useResizeObserver<HTMLDivElement>();

  const [request, setRequest] = React.useState<ChartRequestState>({
    item: null,
    start: undefined,
    end: undefined,
    intervalMin: 30,
  });

  const {
    availableItemsResponse,
    fetchAvailableItems,
    snipingItemResponse,
    fetchSnipingItem,
    pxDataResponse,
    fetchPxData,
  } = useApiRequests();

  React.useEffect(() => {
    fetchAvailableItems({
      force: true,
      payload: null,
    });
    fetchSnipingItem({
      force: true,
      payload: null,
    });
  }, []);

  const requestPxData = React.useCallback((itemOverride?: string) => {
    const item = itemOverride ?? request.item;

    if (item === null) {
      dispatch(errorDispatchers[ErrorDispatcherName.UPDATE]({message: 'Select an item before requesting Px data.'}));
      return;
    }

    fetchPxData({
      force: true,
      payload: {...request, item},
    });
  }, [request, fetchPxData]);

  const onSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    requestPxData();
  }, [request, fetchPxData]);

  const getTitleText = React.useCallback(() => {
    if (!!request.item) {
      return request.item;
    }

    if (availableItemsResponse.fetching) {
      return '(Loading...)';
    }

    if (availableItemsResponse.fetched) {
      if (availableItemsResponse.fetchError) {
        return '(Unable to fetch available items)';
      }

      return '(Select an item)';
    }

    return '(Initializing...)';
  }, [request.item, availableItemsResponse]);

  const {data} = pxDataResponse;
  const {data: snipingItem} = snipingItemResponse;

  return (
    <main className={classNames(
      'flex h-full flex-col items-center gap-1.5 bg-gradient-radial p-2 md:p-1.5',
      !!snipingItem ? 'from-orange-700' : 'from-indigo-600',
    )}>
      <form
        className="flex w-full flex-col gap-1.5 md:flex-row md:items-center md:justify-center md:gap-3"
        onSubmit={onSubmit}
      >
        <div>
          <Dropdown
            title={getTitleText()}
            items={[availableItemsResponse.data.map((item) => ({
              text: item,
              onSelected: () => {
                setRequest((request) => ({...request, item}));
                // Need to call with override because `request` is not updated immediately after `setRequest`,
                // meaning that `request.item` used could be incorrect
                requestPxData(item);
              },
            }))]}
            disabled={availableItemsResponse.fetchError}
            buttonClassName="w-full md:w-72 whitespace-nowrap"
            itemsClassName="w-full md:w-72"
          />
        </div>
        <div className="flex flex-row gap-3">
          <InputField
            id="interval-min" placeholder="Interval (min)"
            wrapperClassName="w-1/3 md:w-24" inputClassName="-mt-0.5"
            type="number" step="1" min="1" value={request.intervalMin.toString()}
            onChange={(e) => setRequest((request) => ({...request, intervalMin: Number(e.target.value)}))}
          />
          <InputField
            id="date-start" placeholder="Start"
            wrapperClassName="w-1/3 md:w-28" inputClassName="-ml-1 md:-ml-0 -mt-1"
            type="date" value={request.start}
            onChange={(e) => setRequest((request) => ({...request, start: e.target.value}))}
          />
          <InputField
            id="date-end" placeholder="End"
            wrapperClassName="w-1/3 md:w-28" inputClassName="-ml-1 md:-ml-0 -mt-1"
            type="date" value={request.end}
            onChange={(e) => setRequest((request) => ({...request, end: e.target.value}))}
          />
        </div>
        <div>
          <input
            type="submit" value="Request Data"
            className={classNames(
              'w-full cursor-pointer rounded-md text-sm px-2 py-1.5',
              'ring-1 ring-inset ring-amber-900 hover:bg-amber-900',
            )}
          />
        </div>
      </form>
      <FullWidthRow className="h-full items-center justify-center" ref={ref}>
        <PxChartArea data={data} width={width} height={height} item={request.item} sniping={snipingItem}/>
      </FullWidthRow>
      <FullWidthRow className="flex-row-reverse justify-between text-sm">
        <PxChartInfo data={data}/>
      </FullWidthRow>
    </main>
  );
};
