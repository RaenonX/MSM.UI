import React from 'react';

import {useTradingViewChart} from '@/components/chart/base/hook';
import {
  ChartCalcObjects,
  ChartDataUpdatedEventHandler,
  ChartInitEventHandler,
  ChartRenderObjects,
  ChartSetStateObjects,
} from '@/components/chart/base/type';


export type TradingViewChartProps<T, P, R, L> = {
  width: number,
  height: number,
  initChart: ChartInitEventHandler<T, R, L, P>,
  chartData: T,
  payload: P,
  onDataUpdated: ChartDataUpdatedEventHandler<T, P, R, L>,
  calcObjects: ChartCalcObjects<T, L>,
  renderObjects: ChartRenderObjects<L>,
  getCompleteUpdateDeps: (data: T) => React.DependencyList,
};

export const TradingViewChart = <T, P, R, L>({
  width,
  height,
  initChart,
  chartData,
  payload,
  onDataUpdated,
  calcObjects,
  renderObjects,
  getCompleteUpdateDeps,
}: TradingViewChartProps<T, P, R, L>) => {
  const chartContainerRef = React.useRef<HTMLDivElement>(null);
  const chartDataRef = React.useRef<T>(chartData);
  const [legend, setLegend] = React.useState<L>(calcObjects.legend(chartData));

  const setObject: ChartSetStateObjects<L> = {
    legend: setLegend,
  };

  const {makeChart, chartRef, chartObjectRef} = useTradingViewChart<T, R, L, P>({
    initChart,
    onDataUpdated: () => {
      chartDataRef.current = chartData;
      onDataUpdated({
        chartRef,
        chartDataRef,
        chartObjectRef,
        setObject,
        payload,
      });
    },
    width,
    height,
  });

  // onLoad
  React.useEffect(() => {
    if (!chartContainerRef.current) {
      return;
    }

    chartDataRef.current = chartData;
    makeChart({
      chartDataRef,
      setObject,
      chartContainer: chartContainerRef.current,
      width,
      height,
      ...payload,
    });
  }, []);

  // onUpdate
  React.useEffect(() => {
    chartDataRef.current = chartData;

    onDataUpdated({
      chartRef,
      chartDataRef,
      chartObjectRef,
      setObject,
      payload,
    });
  }, getCompleteUpdateDeps(chartData));

  return (
    <div ref={chartContainerRef}>
      <div className="absolute z-10">
        {renderObjects.legend(legend)}
      </div>
    </div>
  );
};
