'use client';
import React from 'react';

import {Main} from '@/components/pages/main/main';
import {ReduxProvider} from '@/state/provider';


const MainPage = () => {
  return (
    <ReduxProvider>
      <Main/>
    </ReduxProvider>
  );
};

export default MainPage;
