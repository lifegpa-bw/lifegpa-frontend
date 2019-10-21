import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import rootReducer from './reducers'

import Theme from './mui/custom-theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import App from './App'
import './styles/index.css'

/* 
++++++++ Development +++++++++++
======== Redux DevTools Setup with Middleware & Enhancers ==============
*/
const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

let rootStore = null

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  const { logger } = require('redux-logger')
  // use Logger in dev
  middleware.push(logger)

  rootStore = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middleware),
      // enable Redux Dev Tools extension in dev
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
}

//++++++++ Production  With Middleware & Enhancers +++++++++++

if (process.env.NODE_ENV === 'production') {
  rootStore = createStore(rootReducer, applyMiddleware(thunk))
}

ReactDOM.render(
  <Provider store={rootStore}>
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
