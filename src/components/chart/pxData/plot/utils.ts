import {BarsInfo, PriceLineOptions} from 'lightweight-charts';

import {ExtremaPx, GetCurrentExtremaPxOptions} from '@/components/chart/pxData/plot/type';
import {PxBar} from '@/types/px';
import {isPxBarWithData} from '@/utils/px';


export const getCurrentChartExtremaPx = ({chart, price, data}: GetCurrentExtremaPxOptions): ExtremaPx => {
  const visibleRange = chart.timeScale().getVisibleLogicalRange();

  if (!visibleRange) {
    throw new Error('No data in chart');
  }

  const barsInfo = price.barsInLogicalRange(visibleRange);

  if (!barsInfo) {
    return {minPx: null, maxPx: null};
  }

  return getExtremaPxOfRange(barsInfo, data);
};

export const getExtremaPxOfRange = (barsInfo: BarsInfo, data: PxBar[]): ExtremaPx => {
  const {from, to} = barsInfo;

  if (!from || !to) {
    console.warn('Bars info does not include timestamps', barsInfo);
    return {minPx: null, maxPx: null};
  }

  const bars = data.filter(({epochSecond}) => epochSecond >= (from as number) && epochSecond <= (to as number));

  const maxPx = Math.max(...bars.filter(isPxBarWithData).map(({high}) => high));
  const minPx = Math.min(...bars.filter(isPxBarWithData).map(({low}) => low));

  return {minPx, maxPx};
};

export const getExtremaPxLineOptions = (
  px: number | null,
): Pick<PriceLineOptions, 'price' | 'lineVisible' | 'axisLabelVisible'> => {
  return {
    price: px ?? 0,
    lineVisible: !!px,
    axisLabelVisible: !!px,
  };
};
