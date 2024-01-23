'use client';

import { Provider } from 'react-redux';
import { persistor, store } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import ListingPage from './ListingPage';
import '../../app/globals.css';

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main className='flex min-h-screen flex-col items-center justify-between p-4 lg:p-24'>
          <div className='z-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex'>
            <ListingPage />
          </div>
        </main>
      </PersistGate>
    </Provider>
  );
}
