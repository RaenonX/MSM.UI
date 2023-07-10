import {AxiosResponse} from 'axios';

import {AvailableItemsResponse, SnipingItemResponse} from '@/types/api/item';
import {PxDataFromApi} from '@/types/api/px';
import {ScriptLoopTimeStatsResponse} from '@/types/api/script';
import {apiGet} from '@/utils/api/common/get';


export type ApiGetPxDataOpts = {
  item: string,
  start?: string,
  end?: string,
  intervalMin: number,
};

export const apiGetPxData = (params: ApiGetPxDataOpts): Promise<AxiosResponse<PxDataFromApi>> => (
  apiGet({apiPath: '/api/px', params})
);

export const apiGetAvailableItems = (): Promise<AxiosResponse<AvailableItemsResponse>> => (
  apiGet({apiPath: '/api/item/available'})
);

export const apiGetSnipingItem = (): Promise<AxiosResponse<SnipingItemResponse>> => (
  apiGet({apiPath: '/api/item/sniping-web'})
);

type ApiGetScriptLoopStatsOpts = {
  loops: number,
};

export const apiGetScriptLoopStats = (
  params: ApiGetScriptLoopStatsOpts,
): Promise<AxiosResponse<ScriptLoopTimeStatsResponse>> => (
  apiGet({apiPath: '/api/script/loop', params})
);
