import {OnPxChartInitEvent} from '@/components/chart/pxData/type';


export const handleLegend = ({chartDataRef, setObject}: OnPxChartInitEvent) => {
  setObject.legend((legend) => ({
    ...legend,
    close: chartDataRef.current.bars.at(-1)?.close || legend.close,
  }));
};
