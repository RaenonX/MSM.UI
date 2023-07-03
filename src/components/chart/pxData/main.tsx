import {TradingViewChart, TradingViewChartProps} from '@/components/chart/base/main';
import {PxChartLegendUI} from '@/components/chart/pxData/legend/main';
import {onPxChartInit} from '@/components/chart/pxData/plot/onInit/main';
import {onPxChartUpdated} from '@/components/chart/pxData/plot/onUpdate/main';
import {PxChartInitData, PxChartLegend, PxChartPayload} from '@/components/chart/pxData/type';
import {PxData} from '@/types/px';
import {toLegendDataFromPxData} from '@/utils/px';


type Props = Pick<
  TradingViewChartProps<
    PxData,
    PxChartPayload,
    PxChartInitData,
    PxChartLegend
  >,
  'chartData' |
  'height' |
  'width' |
  'payload'
>;

export const PxDataChart = (props: Props) => {
  return (
    <TradingViewChart
      initChart={onPxChartInit}
      onDataUpdated={onPxChartUpdated}
      calcObjects={{
        legend: toLegendDataFromPxData,
      }}
      renderObjects={{
        legend: (legend) => <PxChartLegendUI legend={legend}/>,
      }}
      getCompleteUpdateDeps={(data) => [data.fetchedAt]}
      {...props}
    />
  );
};
