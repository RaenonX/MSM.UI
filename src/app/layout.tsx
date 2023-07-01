import React from 'react';

import {Metadata} from 'next';
// eslint-disable-next-line camelcase
import {Nunito_Sans} from 'next/font/google';

import './globals.css';

// eslint-disable-next-line new-cap
const font = Nunito_Sans({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Mushroom Bijass',
  description: 'UI of Mushroom Bijass.',
};

const RootLayout = ({children}: React.PropsWithChildren) => {
  return (
    <html lang='en'>
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
