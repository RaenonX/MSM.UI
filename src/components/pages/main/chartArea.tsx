import React from 'react';

import {PxDataChart} from '@/components/chart/pxData/main';
import {Loading} from '@/components/icons/loading';
import {PxData} from '@/types/px';


type Props = {
  data: PxData | null,
  item: string | null,
  width: number | undefined,
  height: number | undefined,
};

export const PxChartArea = ({data, item, width, height}: Props) => {
  if (!data) {
    if (!item) {
      return <span className="text-xl">Select an item</span>;
    }

    return (
      <div className="h-16">
        <Loading/>
      </div>
    );
  }

  if (!width || !height) {
    return <></>;
  }

  return <PxDataChart chartData={data} height={height} width={width} payload={{}}/>;
};
