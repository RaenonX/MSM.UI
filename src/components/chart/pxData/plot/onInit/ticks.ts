import {ISeriesApi} from 'lightweight-charts';

import {toUpTickHistogram} from '@/components/chart/pxData/dataConvert';
import {tickBarColor} from '@/components/chart/pxData/plot/const';
import {OnPxChartInitEvent} from '@/components/chart/pxData/type';


export const handleTicks = ({chartRef, chartDataRef}: OnPxChartInitEvent): ISeriesApi<'Histogram'> => {
  // Currently using up ticks only
  if (!chartRef.current) {
    throw new Error('Adding price while the chart is not ready');
  }

  const {bars} = chartDataRef.current;

  const histogram = chartRef.current.addHistogramSeries({
    color: tickBarColor,
    priceFormat: {
      type: 'volume',
    },
    lastValueVisible: false,
    priceLineVisible: false,
    priceScaleId: '', // set as an overlay by setting a blank priceScaleId
  });
  histogram.priceScale().applyOptions({
    scaleMargins: {
      top: 0.85, // 85% away from the top
      bottom: 0,
    },
  });
  histogram.setData(bars.map(toUpTickHistogram));

  return histogram;
};
