import {ISeriesApi} from 'lightweight-charts';

import {ValidKeyForLineData} from '@/components/chart/pxData/dataConvert';
import {PxChartLegendData, PxChartSeries} from '@/components/chart/pxData/type';
import {KeysOfType} from '@/utils/types';


export type HandlePxLineOptions = {
  title: string,
  keyOfSeries: KeysOfType<PxChartSeries, ISeriesApi<'Line'> | null>,
  keyOfLegendData: keyof PxChartLegendData,
  keyForLineData: ValidKeyForLineData,
};
