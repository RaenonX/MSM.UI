import React from 'react';

import {PxDirectionText} from '@/types/px';
import {formatSignedNumber, formatToAbbreviation} from '@/utils/string';


export type LegendDataCellProps = {
  title?: React.ReactNode,
  value: string | number,
  direction?: PxDirectionText,
  decimals?: number,
  large?: boolean,
};

export const LegendDataCell = ({title, value, direction, decimals, large}: LegendDataCellProps) => {
  let valueClassName = '';

  if (direction === 'up') {
    valueClassName = 'text-bull-400';
  } else if (direction === 'down') {
    valueClassName = 'text-bear-400';
  }

  return (
    <div className={`inline whitespace-nowrap px-1 py-2 ${valueClassName}`}>
      {
        title &&
        <><span className="text-xs">{title}</span>&nbsp;</>
      }
      <span className={large ? 'text-lg' : ''}>
        {typeof value === 'number' ?
          (!direction ? formatToAbbreviation({num: value, decimals}) : formatSignedNumber({num: value, decimals})):
          value}
      </span>
    </div>
  );
};
