/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';
import {Routes} from './src/route';

const reactQueryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
