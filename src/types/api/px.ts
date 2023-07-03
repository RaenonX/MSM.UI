// IPxBarModel of server
type PxBarFromApiCommon<Empty extends boolean> = {
  epochSecond: number,
  empty: Empty,
};

// PxBarModel of server
export type PxBarWithDataFromApi = PxBarFromApiCommon<false> & {
  epochSecond: number,
  open: number,
  high: number,
  low: number,
  close: number,
  upTick: number,
  downTick: number,
};

// PxBarEmptyModel of server
export type PxBarNoDataFromApi = PxBarFromApiCommon<true>;

export type PxBarFromApi = PxBarWithDataFromApi | PxBarNoDataFromApi;

export type PxDataFromApi = {
  timestamp: string,
  item: string,
  bars: PxBarFromApi[],
};
