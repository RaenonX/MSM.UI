import {LineSeriesPartialOptions} from 'lightweight-charts';

import {ValidKeyForLineData} from '@/components/chart/pxData/dataConvert';
import {OnPxChartInitEvent} from '@/components/chart/pxData/type';


export type AddPxLineOptionsFromInitEvent = Pick<
  OnPxChartInitEvent,
  'chartRef' | 'chartDataRef'
>;

export type AddPxLineOptions =
  AddPxLineOptionsFromInitEvent &
  LineSeriesPartialOptions & {
    keyForLineData: ValidKeyForLineData,
  };
