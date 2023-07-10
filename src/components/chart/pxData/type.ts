import {IPriceLine, ISeriesApi} from 'lightweight-charts';

import {
  ChartDataUpdatedEventHandler,
  ChartInitEventHandler,
  OnChartDataUpdatedEvent,
  OnChartInitEvent,
} from '@/components/chart/base/type';
import {PxData} from '@/types/px';


export type PxChartSeries = {
  price: ISeriesApi<'Candlestick'>,
  ticks: ISeriesApi<'Histogram'>,
};

export type PxChartExtremaSeries = {
  min: IPriceLine,
  max: IPriceLine,
};

export type PxChartLines = {
  extrema: PxChartExtremaSeries,
};

export type PxChartLegendCommon<Empty extends boolean> = {
  item: string,
  empty: Empty,
};

export type PxChartLegendWithData = PxChartLegendCommon<false> & {
  open: number,
  high: number,
  low: number,
  close: number,
  changeVal: number,
  changePct: number,
  upTick: number,
  hovered: boolean,
};

export type PxChartLegendNoData = PxChartLegendCommon<true>;

export type PxChartLegend = PxChartLegendWithData | PxChartLegendNoData;

export type PxChartInitData = {
  series: PxChartSeries,
  lines: PxChartLines,
};

// Reserved
export type PxChartPayload = {};

export type OnPxChartInitEvent = OnChartInitEvent<
  PxData,
  PxChartInitData,
  PxChartLegend,
  PxChartPayload
>;

export type PxChartInitEventHandler = ChartInitEventHandler<
  PxData,
  PxChartInitData,
  PxChartLegend,
  PxChartPayload
>;

export type OnPxChartUpdatedEvent = OnChartDataUpdatedEvent<
  PxData,
  PxChartPayload,
  PxChartInitData,
  PxChartLegend
>;

export type PxChartUpdatedEventHandler = ChartDataUpdatedEventHandler<
  PxData,
  PxChartPayload,
  PxChartInitData,
  PxChartLegend
>;
