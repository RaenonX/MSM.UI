import {MouseEventHandler} from 'lightweight-charts';

import {OnPxChartInitEvent, PxChartLegendData} from '@/components/chart/pxData/type';


export const handleCrosshairMove = ({
  chartDataRef,
  setObject,
}: OnPxChartInitEvent): MouseEventHandler => ({
  time,
}) => {
  const data = chartDataRef.current.bars;
  const last = data.at(-1);

  const hovered = data.find(({epochSecond}) => epochSecond === time);

  // Using `last` because moving out of chart makes `lastPrice` undefined
  setObject.legend(({item}) => {
    const legend: PxChartLegendData = {
      item,
      open: hovered?.open ?? last?.open ?? NaN,
      high: hovered?.high ?? last?.high ?? NaN,
      low: hovered?.low ?? last?.low ?? NaN,
      close: hovered?.close ?? last?.close ?? NaN,
      changeVal: hovered?.diff ?? last?.diff ?? NaN,
      changePct:
        (hovered ? hovered.diff / hovered.open * 100 : null) ??
        (last ? last.diff / last.open * 100 : null) ??
        NaN,
      hovered: !!hovered,
    };

    return legend;
  });
};
