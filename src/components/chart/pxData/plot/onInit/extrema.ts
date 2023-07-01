import {ISeriesApi} from 'lightweight-charts';

import {extremaCommonOptions} from '@/components/chart/pxData/plot/const';
import {getCurrentChartExtremaPx} from '@/components/chart/pxData/plot/utils';
import {OnPxChartInitEvent, PxChartExtremaSeries} from '@/components/chart/pxData/type';


export const handleExtrema = (e: OnPxChartInitEvent, price: ISeriesApi<'Candlestick'>): PxChartExtremaSeries => {
  const {chartRef, chartDataRef} = e;

  if (!chartRef.current) {
    throw new Error('Attempt to initialize extrema lines but the chart is not ready');
  }

  const {minPx, maxPx} = getCurrentChartExtremaPx({
    chart: chartRef.current,
    data: chartDataRef.current.bars,
    price,
  });

  if (!minPx) {
    throw new Error('Failed to initialize extrema Px lines');
  }

  return {
    max: price.createPriceLine({
      title: 'High',
      price: maxPx,
      ...extremaCommonOptions,
    }),
    min: price.createPriceLine({
      title: 'Low',
      price: minPx,
      ...extremaCommonOptions,
    }),
  };
};
