import React from 'react';

import {AxiosResponse} from 'axios';
import useResizeObserver from 'use-resize-observer';

import {Dropdown} from '@/components/input/dropdown/main';
import {InputField} from '@/components/input/field';
import {FullWidthRow} from '@/components/layout/fullWidthRow';
import {PxChartArea} from '@/components/pages/main/chartArea';
import {ChartRequestState} from '@/components/pages/main/type';
import {useFetchStateProcessed} from '@/hooks/fetch';
import {errorDispatchers} from '@/state/error/dispatchers';
import {ErrorDispatcherName} from '@/state/error/types';
import {useDispatch} from '@/state/store';
import {AvailableItemsResponse} from '@/types/api/item';
import {PxDataFromApi} from '@/types/api/px';
import {PxData} from '@/types/px';
import {apiGetAvailableItems, apiGetPxData, ApiGetPxDataOpts} from '@/utils/api/px';
import {updateEpochSecToLocal} from '@/utils/time';


export const Main = () => {
  const dispatch = useDispatch();

  const {ref, width, height} = useResizeObserver<HTMLDivElement>();
  // TODO: Preload from URL if available - then make link on bot
  const [request, setRequest] = React.useState<ChartRequestState>({
    item: null,
    start: undefined,
    end: undefined,
    intervalMin: 15,
  });

  const {
    fetchStatus: availableItemsResponse,
    fetchFunction: fetchAvailableItems,
  } = useFetchStateProcessed<string[], AxiosResponse<AvailableItemsResponse>, null>(
    [],
    () => apiGetAvailableItems(),
    'Unable to get available items.',
    ({data}) => data.items,
  );

  const {
    fetchStatus: pxDataResponse,
    fetchFunction: fetchPxData,
  } = useFetchStateProcessed<PxData | null, AxiosResponse<PxDataFromApi>, ApiGetPxDataOpts>(
    null,
    (opts) => apiGetPxData(opts),
    'Unable to get Px data.',
    ({data}) => ({
      ...data,
      bars: data.bars.map((bar) => ({
        ...bar,
        diff: bar.close - bar.open,
        epochSecond: updateEpochSecToLocal(bar.epochSecond),
      })),
    }),
  );

  React.useEffect(() => {
    fetchAvailableItems({
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

  const {data} = pxDataResponse;

  return (
    <main className="flex h-screen flex-col items-center gap-2 bg-gradient-radial from-indigo-800 p-3">
      <FullWidthRow className="items-center justify-center">
        <form className="flex flex-row gap-2" onSubmit={onSubmit}>
          <Dropdown
            title={request.item ?? '(Select an item)'}
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
            buttonClassName="w-80 ring-inset ring-1"
            itemsClassName="w-80"
          />
          <InputField
            id="interval-min" placeholder="Interval (min)" className="w-24"
            type="number" step="1" min="1" value={request.intervalMin.toString()}
            onChange={(e) => setRequest((request) => ({...request, intervalMin: Number(e.target.value)}))}
          />
          <InputField
            id="date-start" placeholder="Start" className="w-32"
            type="date" value={request.start}
            onChange={(e) => setRequest((request) => ({...request, start: e.target.value}))}
          />
          <InputField
            id="date-end" placeholder="End" className="w-32"
            type="date" value={request.end}
            onChange={(e) => setRequest((request) => ({...request, end: e.target.value}))}
          />
          <input
            type="submit" value="Request Data"
            className="cursor-pointer rounded-md px-3 ring-1 ring-inset hover:bg-indigo-800"
          />
        </form>
      </FullWidthRow>
      <FullWidthRow className="h-full items-center justify-center" ref={ref}>
        <PxChartArea data={data} width={width} height={height} item={request.item}/>
      </FullWidthRow>
    </main>
  );
};
