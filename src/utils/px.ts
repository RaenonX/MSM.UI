import {PxChartLegendData} from '@/components/chart/pxData/type';
import {PxData} from '@/types/px';


export const toLegendData = (data: PxData): PxChartLegendData => {
  const lastHistory = data.bars.at(-1);

  const open = lastHistory?.open ?? NaN;
  const close = lastHistory?.close ?? NaN;
  const change = close - open;

  return {
    item: data.item,
    open,
    high: lastHistory?.high ?? NaN,
    low: lastHistory?.low ?? NaN,
    close,
    changeVal: change,
    changePct: (change / open) * 100,
    hovered: false,
  };
};
