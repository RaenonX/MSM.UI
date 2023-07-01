import React from 'react';

import {IChartApi} from 'lightweight-charts';


export type ChartSetState<T> = (updateFunc: (prevLegend: T) => T) => void;

export type ChartStatefulObjects<L> = {
  legend: L,
};

export type ChartSetStateObjects<L> = ChartStatefulObjects<ChartSetState<L>>;

export type ChartInitCalcObject<T, D> = (data: T) => D;

export type ChartCalcObjects<T, L> = ChartStatefulObjects<
  ChartInitCalcObject<T, L>
>;

export type ChartRenderObject<D> = (object: D) => React.ReactNode;

export type ChartRenderObjects<L> = {
  legend: ChartRenderObject<L>,
};

export type ChartObjectRef<T> = {
  chartContainer: HTMLDivElement,
  initData: T,
};

export type InitChartPayload<T, L> = {
  // Needs to be `ref` because crosshair move event subscription refers chart data
  chartDataRef: React.MutableRefObject<T>,
  setObject: ChartSetStateObjects<L>,
  chartContainer: HTMLDivElement,
};

export type UseChartPayload<T, R, L, P> = {
  initChart: ChartInitEventHandler<T, R, L, P>,
  onDataUpdated: () => void,
  height: number,
  width: number,
};

export type UseChartReturn<T, R, L, P> = {
  makeChart: (payload: InitChartPayload<T, L> & P) => void,
  chartRef: React.MutableRefObject<IChartApi | undefined>,
  chartObjectRef: React.MutableRefObject<ChartObjectRef<R> | undefined>,
};

export type OnChartChangedEventCommon<T, R, L> = {
  chartRef: React.MutableRefObject<IChartApi | undefined>,
  chartDataRef: React.MutableRefObject<T>,
  chartObjectRef: React.MutableRefObject<ChartObjectRef<R> | undefined>,
  setObject: ChartSetStateObjects<L>,
};

export type OnChartInitEvent<T, R, L, P = {}> =
  InitChartPayload<T, L> &
  OnChartChangedEventCommon<T, R, L> &
  P;

export type ChartInitEventHandler<T, R, L, P = {}> = (e: OnChartInitEvent<T, R, L, P>) => R;

export type OnChartDataUpdatedEvent<T, P, R, L> = OnChartChangedEventCommon<T, R, L> & {
  payload: P,
};

export type ChartDataUpdatedEventHandler<T, P, R, L> = (e: OnChartDataUpdatedEvent<T, P, R, L>) => void;
