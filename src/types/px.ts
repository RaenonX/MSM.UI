import {PxBarNoDataFromApi, PxBarWithDataFromApi} from '@/types/api/px';


export type PxDirectionText = 'up' | 'neutral' | 'down';

export type PxBarWithData = PxBarWithDataFromApi & {diff: number};

export type PxBar = PxBarWithData | PxBarNoDataFromApi;

export type PxData = {
  timestamp: string,
  item: string,
  bars: PxBar[],
};
