import {PxChartLegend} from '@/components/chart/pxData/type';
import {PxBar, PxBarWithData, PxData} from '@/types/px';


export const toLegendDataFromPxData = ({bars, item}: PxData): PxChartLegend => {
  return toLegendDataFromBar({bar: bars.at(-1), item, hovered: false});
};

type ToLegendDataFromBarOpts = {
  bar: PxBar | undefined,
  item: string,
  hovered: boolean,
};

export const toLegendDataFromBar = ({bar, item, hovered}: ToLegendDataFromBarOpts): PxChartLegend => {
  if (bar && isPxBarWithData(bar)) {
    const open = bar.open;
    const close = bar.close;

    return {
      item,
      open,
      high: bar.high ?? NaN,
      low: bar.low ?? NaN,
      close,
      upTick: bar.upTick,
      changeVal: bar.diff,
      changePct: (bar.diff / open) * 100,
      hovered,
      empty: false,
    };
  }

  return {item, empty: true};
};

export const isPxBarWithData = (bar: PxBar | undefined): bar is PxBarWithData => {
  if (bar === undefined) {
    return false;
  }

  return !bar.empty;
};
