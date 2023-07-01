import {IChartApi, ISeriesApi, PriceLineOptions} from 'lightweight-charts';

import {PxBar} from '@/types/px';


export type ExtremaCommonOptions = Omit<PriceLineOptions, 'price' | 'title'>;

export type ExtremaPx = {
  minPx: number,
  maxPx: number,
} | {
  minPx: null,
  maxPx: null,
};

export type GetCurrentExtremaPxOptions = {
  chart: IChartApi,
  data: PxBar[],
  price: ISeriesApi<'Candlestick'>
};
