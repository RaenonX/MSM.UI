import {getCurrentChartExtremaPx} from '@/components/chart/pxData/plot/utils';
import {OnPxChartUpdatedEvent} from '@/components/chart/pxData/type';


export const handleExtrema = ({chartRef, chartObjectRef, chartDataRef}: OnPxChartUpdatedEvent) => {
  if (!chartRef.current || !chartObjectRef.current) {
    return;
  }

  const {min, max} = chartObjectRef.current.initData.lines.extrema;
  const {minPx, maxPx} = getCurrentChartExtremaPx({
    chart: chartRef.current,
    data: chartDataRef.current.bars,
    price: chartObjectRef.current.initData.series.price,
  });

  if (!minPx) {
    return;
  }

  min.applyOptions({price: minPx});
  max.applyOptions({price: maxPx});
};
