import {CandlestickData, SeriesDataItemTypeMap, UTCTimestamp} from 'lightweight-charts';

import {PxBar} from '@/types/px';
import {KeysOfType} from '@/utils/types';


export const toCandlestick = (bar: PxBar): CandlestickData => ({
  time: bar.epochSecond as UTCTimestamp,
  ...bar,
});

export type GetPxFromBar = (bar: PxBar) => number | undefined;

export const toCandlestickForFill = (
  getCandleOpen: GetPxFromBar,
  getCandleClose: GetPxFromBar,
) => (
  bar: PxBar,
): CandlestickData => {
  const open = getCandleOpen(bar) || NaN;
  const close = getCandleClose(bar) || NaN;

  return {
    time: bar.epochSecond as UTCTimestamp,
    open,
    high: Math.max(open, close),
    low: Math.min(open, close),
    close,
  };
};

export type ValidKeyForLineData = KeysOfType<PxBar, number | null>;

export const toLineData = (
  getValue: GetPxFromBar,
  colorOverride?: (bar: PxBar) => string,
) => (
  bar: PxBar,
): SeriesDataItemTypeMap['Line'] => {
  const value = getValue(bar);

  if (!value) {
    return {
      time: bar.epochSecond as UTCTimestamp,
    };
  }

  return {
    time: bar.epochSecond as UTCTimestamp,
    color: colorOverride && colorOverride(bar),
    value,
  };
};
