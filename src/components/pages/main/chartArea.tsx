import React from 'react';

import {PxDataChart} from '@/components/chart/pxData/main';
import {Loading} from '@/components/icons/loading';
import {PxChartSnipingInfo} from '@/components/pages/main/info/sniping';
import {SnipingItemResponse} from '@/types/api/item';
import {PxData} from '@/types/px';


type Props = {
  data: PxData | null,
  item: string | null,
  width: number | undefined,
  height: number | undefined,
  sniping: SnipingItemResponse['item'],
};

export const PxChartArea = ({data, item, width, height, sniping}: Props) => {
  if (!data) {
    // No price data loaded

    if (!!sniping) {
      // There is item being sniped
      return <PxChartSnipingInfo sniping={sniping}/>;
    }

    if (!item) {
      // No item selected
      return <span className="text-3xl">Select an item</span>;
    }

    // Loading
    return (
      <div className="h-16">
        <Loading/>
      </div>
    );
  }

  if (!width || !height) {
    // Element dimension unavailable
    return <></>;
  }

  return <PxDataChart chartData={data} height={height} width={width} payload={{}}/>;
};
