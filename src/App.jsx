import React from "react"
import { Provider } from 'react-redux'

import { store } from './store'

import { StyledEngineProvider } from '@mui/material/styles'

import { AppRoutes } from './AppRoutes'

export function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </StyledEngineProvider>
  )
}

