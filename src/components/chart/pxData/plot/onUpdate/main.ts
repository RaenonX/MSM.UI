import {handleExtrema} from '@/components/chart/pxData/plot/onUpdate/extrema';
import {handleLegend} from '@/components/chart/pxData/plot/onUpdate/legend';
import {handlePrice} from '@/components/chart/pxData/plot/onUpdate/price';
import {handleTicks} from '@/components/chart/pxData/plot/onUpdate/ticks';
import {PxChartUpdatedEventHandler} from '@/components/chart/pxData/type';


export const onPxChartUpdated: PxChartUpdatedEventHandler = (e) => {
  handlePrice(e);
  handleTicks(e);
  handleLegend(e);
  handleExtrema(e);
};
