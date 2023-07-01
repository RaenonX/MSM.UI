import {TradingViewChart, TradingViewChartProps} from '@/components/chart/base/main';
import {PxChartLegend} from '@/components/chart/pxData/legend/main';
import {onPxChartInit} from '@/components/chart/pxData/plot/onInit/main';
import {onPxChartUpdated} from '@/components/chart/pxData/plot/onUpdate/main';
import {PxChartInitData, PxChartLegendData, PxChartPayload} from '@/components/chart/pxData/type';
import {PxData} from '@/types/px';
import {toLegendData} from '@/utils/px';


type Props = Pick<
  TradingViewChartProps<
    PxData,
    PxChartPayload,
    PxChartInitData,
    PxChartLegendData
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
        legend: toLegendData,
      }}
      renderObjects={{
        legend: (legend) => <PxChartLegend legend={legend}/>,
      }}
      getCompleteUpdateDeps={(data) => [data.timestamp]}
      {...props}
    />
  );
};
