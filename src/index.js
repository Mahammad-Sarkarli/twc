/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './features/root/App'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { store } from './app/store'
import { BrowserRouter } from 'react-router-dom'
import 'animate.css';
const rootElement = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
