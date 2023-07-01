import {OnPxChartUpdatedEvent} from '@/components/chart/pxData/type';
import {toLegendData} from '@/utils/px';


export const handleLegend = ({chartDataRef, setObject}: OnPxChartUpdatedEvent) => {
  const chartData = chartDataRef.current;

  setObject.legend((legend) => ({
    ...legend,
    // Only update the legend on Px changed if not hovered,
    // So even if the latest bar is updated, the legend won't change
    ...(legend.hovered ? {} : toLegendData(chartData)),
  }));
};
