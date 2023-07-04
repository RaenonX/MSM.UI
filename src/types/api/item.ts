import {PxSnipingItemModel} from '@/types/models/item';


export type AvailableItemsResponse = {
  items: string[],
};

export type SnipingItemResponse = {
  item: PxSnipingItemModel | null
};
