import {useFetchState, useFetchStateProcessed} from '@/hooks/fetch';
import {
  apiGetAvailableItems,
  apiGetPxData,
  ApiGetPxDataOpts,
  apiGetScriptLoopStats,
  apiGetSnipingItem,
} from '@/utils/api/main';
import {updateEpochSecToLocal} from '@/utils/time';


export const useApiRequests = () => {
  const {
    fetchStatus: availableItemsResponse,
    fetchFunction: fetchAvailableItems,
  } = useFetchStateProcessed(
    [],
    () => apiGetAvailableItems(),
    'Unable to get available items.',
    ({data}) => data.items,
  );

  const {
    fetchStatus: snipingItemResponse,
    fetchFunction: fetchSnipingItem,
  } = useFetchStateProcessed(
    null,
    () => apiGetSnipingItem(),
    'Unable to get sniping item.',
    ({data}) => data.item,
  );

  const {
    fetchStatus: pxDataResponse,
    fetchFunction: fetchPxData,
  } = useFetchStateProcessed(
    null,
    (opts: ApiGetPxDataOpts) => apiGetPxData(opts),
    'Unable to get Px data.',
    ({data}) => ({
      ...data,
      bars: data.bars.map((bar) => {
        const epochSecond = updateEpochSecToLocal(bar.epochSecond);

        if (bar.empty) {
          return {...bar, epochSecond};
        }

        return {
          ...bar,
          epochSecond,
          diff: bar.close - bar.open,
        };
      }),
    }),
  );

  const {
    fetchStatus: scriptLoopStatsResponse,
    fetchFunction: fetchScriptLoopStats,
  } = useFetchState(
    null,
    (loops: number) => apiGetScriptLoopStats({loops}),
    'Unable to get script loop stats.',
  );

  return {
    availableItemsResponse,
    fetchAvailableItems,
    snipingItemResponse,
    fetchSnipingItem,
    pxDataResponse,
    fetchPxData,
    scriptLoopStatsResponse,
    fetchScriptLoopStats,
  };
};
