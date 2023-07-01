import {PxBarFromApi} from '@/types/api/px';


export type PxDirectionText = 'up' | 'neutral' | 'down';

export type PxBar = PxBarFromApi & {
  diff: number,
};

export type PxData = {
  timestamp: string,
  item: string,
  bars: PxBar[],
};
