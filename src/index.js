import React from 'react'
import { Provider } from 'react-redux'
import Routes from './Routes'
import configureStore from './store/'

const store = configureStore()

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)