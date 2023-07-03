import {PxChartLegend, PxChartLegendWithData} from '@/components/chart/pxData/type';


export const isPxChartLegendWithData = (legend: PxChartLegend | undefined): legend is PxChartLegendWithData => {
  if (legend === undefined) {
    return false;
  }

  return !legend.empty;
};
