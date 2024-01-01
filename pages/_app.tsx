// import { Provider } from 'react-redux';
// import store from '../redux/store';
// import '../styles/globals.scss';

// function MyApp({ Component, pageProps }) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

// export default MyApp;

// src/_app.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from '../store';
import '../styles/globals.scss';
import Head from 'next/head';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  return (
    <>
    <Head>
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap" rel="stylesheet" />

      </Head>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
    </>
  );
}

export default MyApp;