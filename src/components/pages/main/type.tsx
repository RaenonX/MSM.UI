import {ApiGetPxDataOpts} from '@/utils/api/px';


export type ChartRequestState = Omit<ApiGetPxDataOpts, 'item'> & {
  item: ApiGetPxDataOpts['item'] | null
};
