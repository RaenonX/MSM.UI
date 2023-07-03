import {OnPxChartUpdatedEvent} from '@/components/chart/pxData/type';
import {isPxChartLegendWithData} from '@/utils/legend';
import {toLegendDataFromPxData} from '@/utils/px';


export const handleLegend = ({chartDataRef, setObject}: OnPxChartUpdatedEvent) => {
  const chartData = chartDataRef.current;

  setObject.legend((legend) => ({
    ...legend,
    // Only update the legend on Px changed if not hovered,
    // So even if the latest bar is updated, the legend won't change
    ...(isPxChartLegendWithData(legend) && legend.hovered ? {} : toLegendDataFromPxData(chartData)),
  }));
};
