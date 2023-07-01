import {handleCrosshairMove} from '@/components/chart/pxData/plot/onEvent/crosshairMove';
import {handleXrangeChange} from '@/components/chart/pxData/plot/onEvent/xRangeChange';
import {OnPxChartInitEvent} from '@/components/chart/pxData/type';


export const handleChartEvent = (e: OnPxChartInitEvent) => {
  const {chartRef} = e;

  if (!chartRef.current) {
    throw new Error('Legend to be handled while the chart is not ready');
  }

  chartRef.current.timeScale().subscribeVisibleLogicalRangeChange(handleXrangeChange(e));
  chartRef.current.subscribeCrosshairMove(handleCrosshairMove(e));
};
