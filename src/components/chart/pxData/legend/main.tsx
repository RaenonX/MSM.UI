import React from 'react';

import {LegendDataCell} from '@/components/chart/pxData/legend/cell';
import {PxChartLegendData} from '@/components/chart/pxData/type';
import {PxDirectionText} from '@/types/px';
import {formatSignedNumber} from '@/utils/string';


type Props = {
  legend: PxChartLegendData,
};

export const PxChartLegend = ({legend}: Props) => {
  const {
    open,
    high,
    low,
    close,
    changeVal,
    changePct,
  } = legend;

  let direction: PxDirectionText = 'neutral';
  if (changeVal) {
    if (changeVal > 0) {
      direction = 'up';
    } else if (changeVal < 0) {
      direction = 'down';
    }
  }

  return (
    <div className="p-2 text-sm">
      <LegendDataCell title="O" value={open} decimals={2}/>
      <LegendDataCell title="H" value={high} decimals={2}/>
      <LegendDataCell title="L" value={low} decimals={2}/>
      <LegendDataCell title="C" value={close} large/>
      <LegendDataCell
        value={`${formatSignedNumber({num: changeVal})} (${formatSignedNumber({num: changePct, decimals: 2})}%)`}
        direction={direction}
      />
    </div>
  );
};
