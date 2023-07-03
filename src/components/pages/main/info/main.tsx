import React from 'react';

import {PxChartInfoText} from '@/components/pages/main/info/text';
import {PxData} from '@/types/px';


type Props = {
  data: PxData | null,
};

export const PxChartInfo = ({data}: Props) => {
  if (!data) {
    return <>-</>;
  }

  const {fetchedAt, lastUpdated} = data;

  return (
    <>
      <div>
        {lastUpdated && <PxChartInfoText title="Price updated" date={new Date(lastUpdated)}/>}
      </div>
      <div>
        <PxChartInfoText title="Data fetched" date={new Date(fetchedAt)}/>
      </div>
    </>
  );
};
