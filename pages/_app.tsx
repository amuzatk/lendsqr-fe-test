import React from 'react';
import '../styles/globals.scss';
import Head from 'next/head';


function MyApp({ Component, pageProps }: any) {
  return (
    <>
    <Head>
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap" rel="stylesheet" />
      </Head>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;