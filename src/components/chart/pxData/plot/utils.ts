import {BarsInfo} from 'lightweight-charts';

import {ExtremaPx, GetCurrentExtremaPxOptions} from '@/components/chart/pxData/plot/type';
import {PxBar} from '@/types/px';


export const getCurrentChartExtremaPx = ({chart, price, data}: GetCurrentExtremaPxOptions): ExtremaPx => {
  const visibleRange = chart.timeScale().getVisibleLogicalRange();

  if (!visibleRange) {
    throw new Error('No data in chart');
  }

  const barsInfo = price.barsInLogicalRange(visibleRange);

  if (!barsInfo) {
    throw new Error(
      'No available series data found in the requested range, ' +
      'check https://tradingview.github.io/lightweight-charts/docs/api/interfaces/ISeriesApi#barsinlogicalrange',
    );
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

  const maxPx = Math.max(...bars.map(({high}) => high));
  const minPx = Math.min(...bars.map(({low}) => low));

  return {minPx, maxPx};
};
