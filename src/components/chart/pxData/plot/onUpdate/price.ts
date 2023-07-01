import {toCandlestick} from '@/components/chart/pxData/dataConvert';
import {OnPxChartUpdatedEvent} from '@/components/chart/pxData/type';


export const handlePrice = ({chartDataRef, chartObjectRef}: OnPxChartUpdatedEvent) => {
  if (!chartObjectRef.current) {
    return;
  }

  const {price} = chartObjectRef.current.initData.series;
  const {bars} = chartDataRef.current;

  const lastPrice = bars.at(-1);

  if (!lastPrice) {
    return;
  }

  price.setData(bars.map(toCandlestick));
};
