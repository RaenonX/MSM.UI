import React from 'react';

import format from 'date-fns/format';
import TimeAgo from 'react-timeago';


type Props = {
  title: string,
  date: Date,
};

export const PxChartInfoText = ({title, date}: Props) => {
  return (
    <>
      {title} <TimeAgo date={date}/>&nbsp;
      <span className="text-xs text-gray-400">
        {format(date, 'yyyy-MM-dd HH:mm:ss (O)')}
      </span>
    </>
  );
};
