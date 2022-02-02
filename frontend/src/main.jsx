import React from 'react'
import ReactDOM from 'react-dom'
import { AppRoutes } from './Routes'
import { GlobalStyles } from './styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
)
