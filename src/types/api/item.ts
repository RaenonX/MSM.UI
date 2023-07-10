import {PxSnipingItemModel} from '@/types/models/item';


// AvailableItemsResponse on server
export type AvailableItemsResponse = {
  items: string[],
};

// SnipingItemResponse on server
export type SnipingItemResponse = {
  item: PxSnipingItemModel | null
};
