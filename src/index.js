import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/App';
import reducer from './reducer';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';


const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger),
);


render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)