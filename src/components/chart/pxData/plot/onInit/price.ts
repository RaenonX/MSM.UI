import {ISeriesApi, LineStyle} from 'lightweight-charts';

import {toCandlestick} from '@/components/chart/pxData/dataConvert';
import {bearColor, bullColor, currentPxColor} from '@/components/chart/pxData/plot/const';
import {OnPxChartInitEvent} from '@/components/chart/pxData/type';


export const handlePrice = ({chartRef, chartDataRef}: OnPxChartInitEvent): ISeriesApi<'Candlestick'> => {
  if (!chartRef.current) {
    throw new Error('Adding price while the chart is not ready');
  }

  const {bars} = chartDataRef.current;

  const price = chartRef.current.addCandlestickSeries({
    priceLineVisible: true,
    priceLineWidth: 1,
    priceLineStyle: LineStyle.Dotted,
    upColor: bullColor,
    borderUpColor: bullColor,
    wickUpColor: bullColor,
    downColor: bearColor,
    borderDownColor: bearColor,
    wickDownColor: bearColor,
    priceLineColor: currentPxColor,
  });
  price.priceScale().applyOptions({
    scaleMargins: {
      top: 0.08, // 8% away from the top
      bottom: 0.2, // 15% is the height of tick bars
    },
  });
  price.setData(bars.map(toCandlestick));

  return price;
};
