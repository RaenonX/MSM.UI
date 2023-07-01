import React from 'react';

import {createChart, IChartApi} from 'lightweight-charts';

import {chartOptions} from '@/components/chart/base/const';
import {ChartObjectRef, UseChartPayload, UseChartReturn} from '@/components/chart/base/type';


export const useTradingViewChart = <T, R, L, P>({
  initChart,
  onDataUpdated,
  width,
  height,
}: UseChartPayload<T, R, L, P>): UseChartReturn<T, R, L, P> => {
  const chartRef = React.useRef<IChartApi>();
  const chartObjectRef = React.useRef<ChartObjectRef<R>>();

  const makeChart: UseChartReturn<T, R, L, P>['makeChart'] = (payload) => {
    const {chartContainer} = payload;

    chartRef.current = createChart(chartContainer, {
      ...chartOptions,
      width,
      height,
    });

    chartObjectRef.current = {
      chartContainer,
      initData: initChart({chartRef, chartObjectRef, ...payload}),
    };
  };

  React.useEffect(() => {
    if (!chartRef.current) {
      return;
    }

    chartRef.current.applyOptions({width, height});

    onDataUpdated();
  }, [width, height]);

  return {makeChart, chartRef, chartObjectRef};
};
