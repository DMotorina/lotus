import React from "react";
import { StyledEngineProvider } from '@mui/material/styles';

import { Provider } from 'react-redux';

import {store} from './store';

import { AppRoutes } from './AppRoutes';

export function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </StyledEngineProvider>
  )
}

