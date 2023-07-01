import {LogicalRangeChangeEventHandler} from 'lightweight-charts';

import {handleXrangeChangeExtrema} from '@/components/chart/pxData/plot/onEvent/xRangeChange/extrema';
import {OnPxChartInitEvent} from '@/components/chart/pxData/type';


export const handleXrangeChange = (e: OnPxChartInitEvent): LogicalRangeChangeEventHandler => (
  logicalRange,
) => {
  const {chartObjectRef} = e;

  if (!logicalRange || !chartObjectRef.current) {
    return;
  }

  const barsInfo = chartObjectRef.current.initData.series.price.barsInLogicalRange(logicalRange);

  handleXrangeChangeExtrema({e, barsInfo});
};
