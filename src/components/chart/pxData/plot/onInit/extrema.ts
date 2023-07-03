import {ISeriesApi} from 'lightweight-charts';

import {extremaCommonOptions} from '@/components/chart/pxData/plot/const';
import {getCurrentChartExtremaPx, getExtremaPxLineOptions} from '@/components/chart/pxData/plot/utils';
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

  return {
    max: price.createPriceLine({
      title: 'High',
      ...extremaCommonOptions,
      ...getExtremaPxLineOptions(maxPx),
    }),
    min: price.createPriceLine({
      title: 'Low',
      ...extremaCommonOptions,
      ...getExtremaPxLineOptions(minPx),
    }),
  };
};
