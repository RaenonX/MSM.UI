import {ApiGetPxDataOpts} from '@/utils/api/main';


export type ChartRequestState = Omit<ApiGetPxDataOpts, 'item'> & {
  item: ApiGetPxDataOpts['item'] | null
};
