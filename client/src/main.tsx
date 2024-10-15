import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { persistor, store } from './redux/store.ts';
import { Provider } from 'react-redux';
import customTheme from './utils/styles/theme.ts';
import './i18n';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={'...loading'} persistor={persistor}>
        <ChakraProvider theme={customTheme}>
          <App />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
