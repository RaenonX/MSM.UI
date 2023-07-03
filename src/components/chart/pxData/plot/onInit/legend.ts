import {OnPxChartInitEvent} from '@/components/chart/pxData/type';
import {isPxChartLegendWithData} from '@/utils/legend';
import {isPxBarWithData} from '@/utils/px';


export const handleLegend = ({chartDataRef, setObject}: OnPxChartInitEvent) => {
  setObject.legend((legend) => {
    const last = chartDataRef.current.bars.at(-1);

    if (isPxBarWithData(last)) {
      return {...legend, close: last.close};
    }

    if (isPxChartLegendWithData(legend)) {
      return {...legend, close: legend.close};
    }

    return {...legend, empty: true};
  });
};
