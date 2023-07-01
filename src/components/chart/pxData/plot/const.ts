import {LineStyle} from 'lightweight-charts';

import {ExtremaCommonOptions} from '@/components/chart/pxData/plot/type';


export const bullColor = '#ef5350';

export const neutralColor = '#c5c5c5';

export const bearColor = '#26a69a';

export const currentPxColor = '#d7d7d7';

export const extremaCommonOptions: ExtremaCommonOptions = {
  color: '#606569',
  lineStyle: LineStyle.Dotted,
  lineWidth: 2,
  lineVisible: true,
  axisLabelVisible: true,
  axisLabelColor: '#142E61',
  axisLabelTextColor: '#e3e3e3',
};
