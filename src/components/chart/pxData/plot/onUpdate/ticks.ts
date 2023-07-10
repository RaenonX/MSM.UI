import {toUpTickHistogram} from '@/components/chart/pxData/dataConvert';
import {OnPxChartUpdatedEvent} from '@/components/chart/pxData/type';


export const handleTicks = ({chartDataRef, chartObjectRef}: OnPxChartUpdatedEvent) => {
  if (!chartObjectRef.current) {
    return;
  }

  const {ticks} = chartObjectRef.current.initData.series;
  const {bars} = chartDataRef.current;

  ticks.setData(bars.map(toUpTickHistogram));
};
