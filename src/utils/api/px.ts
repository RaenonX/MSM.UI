import {AxiosResponse} from 'axios';

import {AvailableItemsResponse} from '@/types/api/item';
import {PxDataFromApi} from '@/types/api/px';
import {apiGet} from '@/utils/api/common/get';


export type ApiGetPxDataOpts = {
  item: string,
  start?: string,
  end?: string,
  intervalMin: number,
};

export const apiGetPxData = (params: ApiGetPxDataOpts): Promise<AxiosResponse<PxDataFromApi>> => (
  apiGet({
    apiPath: '/api/px',
    params,
  })
);


export const apiGetAvailableItems = (): Promise<AxiosResponse<AvailableItemsResponse>> => (
  apiGet({apiPath: '/api/item/available'})
);
