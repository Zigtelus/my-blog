import React from 'react';
import './index.less';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { watchLoadData } from './redux/sagas.ts';
import { rootReducer } from './redux';
import App from './pages';
import logger from 'redux-logger';


const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleWare));
sagaMiddleWare.run(watchLoadData);


render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
)