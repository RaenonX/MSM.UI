export type PxBarFromApi = {
  epochSecond: number,
  open: number,
  high: number,
  low: number,
  close: number,
  upTick: number,
  downTick: number,
};

export type PxDataFromApi = {
  timestamp: string,
  item: string,
  bars: PxBarFromApi[],
};
