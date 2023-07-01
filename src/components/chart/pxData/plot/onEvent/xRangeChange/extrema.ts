import {HandleXrangeChangeOpts} from '@/components/chart/pxData/plot/onEvent/xRangeChange/type';
import {getExtremaPxOfRange} from '@/components/chart/pxData/plot/utils';


export const handleXrangeChangeExtrema = ({e, barsInfo}: HandleXrangeChangeOpts) => {
  const {chartObjectRef, chartDataRef} = e;

  if (!barsInfo || !chartObjectRef.current) {
    return;
  }

  const {min, max} = chartObjectRef.current.initData.lines.extrema;
  const {minPx, maxPx} = getExtremaPxOfRange(barsInfo, chartDataRef.current.bars);

  if (!minPx) {
    return;
  }

  min.applyOptions({price: minPx});
  max.applyOptions({price: maxPx});
};
