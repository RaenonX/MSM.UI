import {MouseEventHandler} from 'lightweight-charts';

import {OnPxChartInitEvent} from '@/components/chart/pxData/type';
import {toLegendDataFromBar} from '@/utils/px';


export const handleCrosshairMove = ({
  chartDataRef,
  setObject,
}: OnPxChartInitEvent): MouseEventHandler => ({
  time,
}) => {
  const data = chartDataRef.current.bars;
  const last = data.at(-1);

  const hovered = data.find(({epochSecond}) => epochSecond === time);

  setObject.legend(({item}) => {
    if (!!hovered) {
      return toLegendDataFromBar({bar: hovered, item, hovered: true});
    }

    if (!!last) {
      return toLegendDataFromBar({bar: last, item, hovered: false});
    }

    return toLegendDataFromBar({bar: undefined, item, hovered: false});
  });
};
