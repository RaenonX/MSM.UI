import {handleChartEvent} from '@/components/chart/pxData/plot/onEvent/main';
import {handleExtrema} from '@/components/chart/pxData/plot/onInit/extrema';
import {handleLegend} from '@/components/chart/pxData/plot/onInit/legend';
import {handlePrice} from '@/components/chart/pxData/plot/onInit/price';
import {PxChartInitEventHandler} from '@/components/chart/pxData/type';


export const onPxChartInit: PxChartInitEventHandler = (e) => {
  const price = handlePrice(e);
  const extrema = handleExtrema(e, price);
  handleLegend(e);

  handleChartEvent(e);

  return {
    series: {price},
    lines: {extrema},
  };
};
