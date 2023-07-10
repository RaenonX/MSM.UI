// IPxBarModel on server
type PxBarFromApiCommon<Empty extends boolean> = {
  epochSecond: number,
  empty: Empty,
};

// PxBarModel on server
export type PxBarWithDataFromApi = PxBarFromApiCommon<false> & {
  epochSecond: number,
  open: number,
  high: number,
  low: number,
  close: number,
  upTick: number,
  downTick: number,
};

// PxBarEmptyModel on server
export type PxBarNoDataFromApi = PxBarFromApiCommon<true>;

export type PxBarFromApi = PxBarWithDataFromApi | PxBarNoDataFromApi;

// PxBarResponse on server
export type PxDataFromApi = {
  fetchedAt: string,
  lastUpdated: string | null,
  item: string,
  bars: PxBarFromApi[],
};
