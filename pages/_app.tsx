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

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;