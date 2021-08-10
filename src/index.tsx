import React from 'react'
import ReactDOM from 'react-dom'
import Router from './main/routes/router'
import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
