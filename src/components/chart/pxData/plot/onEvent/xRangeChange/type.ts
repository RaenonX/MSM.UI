import {BarsInfo} from 'lightweight-charts';

import {OnPxChartInitEvent} from '@/components/chart/pxData/type';


export type HandleXrangeChangeOpts = {
  e: OnPxChartInitEvent,
  barsInfo: BarsInfo | null,
};
