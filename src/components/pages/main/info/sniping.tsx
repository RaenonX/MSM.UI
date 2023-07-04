import React from 'react';

import format from 'date-fns/format';
import TimeAgo from 'react-timeago';

import {PxSnipingItemModel} from '@/types/models/item';
import {formatToAbbreviation} from '@/utils/string';


type Props = {
  sniping: PxSnipingItemModel,
};

export const PxChartSnipingInfo = ({sniping}: Props) => {
  const {item, px, endingTimestamp} = sniping;
  const endingAt = new Date(endingTimestamp);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="mb-3 text-3xl">Select an item</div>
      <div className="text-lg">
        The bot is currently sniping <strong className="text-2xl">{item}</strong>
      </div>
      <div className="text-sm">
        Target Px: <strong className="text-lg">{formatToAbbreviation({num: px})}</strong>
        &nbsp;({px.toLocaleString()})
      </div>
      <div className="text-sm">
        Ending <TimeAgo date={endingAt}/> @ {format(endingAt, 'yyyy-MM-dd HH:mm:ss (O)')}
      </div>
    </div>
  );
};
