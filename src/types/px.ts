import {PxBarNoDataFromApi, PxBarWithDataFromApi, PxDataFromApi} from '@/types/api/px';


export type PxDirectionText = 'up' | 'neutral' | 'down';

export type PxBarWithData = PxBarWithDataFromApi & {diff: number};

export type PxBar = PxBarWithData | PxBarNoDataFromApi;

export type PxData = Omit<PxDataFromApi, 'bars'> & {
  bars: PxBar[],
};
