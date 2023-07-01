import {ISeriesApi} from 'lightweight-charts';

import {toLineData} from '@/components/chart/pxData/dataConvert';
import {AddPxLineOptions} from '@/components/chart/pxData/plot/onInit/pxLine/type';


export const addPxLine = ({
  chartRef,
  chartDataRef,
  keyForLineData,
  priceLineVisible,
  title,
  ...props
}: AddPxLineOptions): ISeriesApi<'Line'> => {
  if (!chartRef.current) {
    throw new Error(`Adding ${title} while the chart is not ready`);
  }

  const series = chartRef.current.addLineSeries({
    ...props,
    title,
    priceLineVisible,
    visible: true,
    lastValueVisible: true,
  });
  series.setData(chartDataRef.current.bars.map(toLineData((bar) => bar[keyForLineData])));

  return series;
};
