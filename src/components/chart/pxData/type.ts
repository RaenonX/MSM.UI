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
};

export type PxChartExtremaSeries = {
  min: IPriceLine,
  max: IPriceLine,
};

export type PxChartLines = {
  extrema: PxChartExtremaSeries,
};

export type PxChartLegendData = {
  item: string,
  open: number,
  high: number,
  low: number,
  close: number,
  changeVal: number,
  changePct: number,
  hovered: boolean,
};

export type PxChartInitData = {
  series: PxChartSeries,
  lines: PxChartLines,
};

// Reserved
export type PxChartPayload = {};

export type OnPxChartInitEvent = OnChartInitEvent<
  PxData,
  PxChartInitData,
  PxChartLegendData,
  PxChartPayload
>;

export type PxChartInitEventHandler = ChartInitEventHandler<
  PxData,
  PxChartInitData,
  PxChartLegendData,
  PxChartPayload
>;

export type OnPxChartUpdatedEvent = OnChartDataUpdatedEvent<
  PxData,
  PxChartPayload,
  PxChartInitData,
  PxChartLegendData
>;

export type PxChartUpdatedEventHandler = ChartDataUpdatedEventHandler<
  PxData,
  PxChartPayload,
  PxChartInitData,
  PxChartLegendData
>;
