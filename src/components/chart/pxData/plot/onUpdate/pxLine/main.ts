import {toLineData} from '@/components/chart/pxData/dataConvert';
import {HandlePxLineOptions} from '@/components/chart/pxData/plot/onUpdate/pxLine/type';
import {OnPxChartUpdatedEvent} from '@/components/chart/pxData/type';


export const handlePxLine = (e: OnPxChartUpdatedEvent, opts: HandlePxLineOptions) => {
  const {chartDataRef, chartObjectRef, setObject} = e;
  const {keyOfLegendData, keyForLineData} = opts;

  if (!chartObjectRef.current) {
    return;
  }

  const lastPrice = chartDataRef.current.bars.at(-1);

  if (!lastPrice) {
    return;
  }

  const pxLine = toLineData((bar) => bar[keyForLineData])(lastPrice);

  // Whitespace data does not have prop of `value`
  if ('value' in pxLine) {
    setObject.legend((legend) => ({...legend, [keyOfLegendData]: pxLine.value}));
  }
};
