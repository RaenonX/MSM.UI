import {LineStyle} from 'lightweight-charts';

import {ExtremaCommonOptions} from '@/components/chart/pxData/plot/type';


export const bullColor = '#26a69a';

export const neutralColor = '#c5c5c5';

export const bearColor = '#ef5350';

export const currentPxColor = '#d7d7d7';

export const extremaCommonOptions: ExtremaCommonOptions = {
  color: '#606569',
  lineVisible: true,
  lineStyle: LineStyle.Dotted,
  lineWidth: 2,
  axisLabelVisible: true,
  axisLabelColor: '#142E61',
  axisLabelTextColor: '#e3e3e3',
};
