import React from 'react';

import {PxChartLegendDataUI} from '@/components/chart/pxData/legend/data';
import {PxChartLegendEmpty} from '@/components/chart/pxData/legend/empty';
import {PxChartLegend} from '@/components/chart/pxData/type';
import {isPxChartLegendWithData} from '@/utils/legend';


type Props = {
  legend: PxChartLegend,
};

export const PxChartLegendUI = ({legend}: Props) => {
  return (
    <div className="p-2 text-sm">
      {isPxChartLegendWithData(legend) ?
        <PxChartLegendDataUI legend={legend}/> :
        <PxChartLegendEmpty/>}
    </div>
  );
};
