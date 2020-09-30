/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
// import {routerMiddleware} from "react-router-redux";
import createReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import formActionSaga from 'redux-form-saga';
import rootSaga from './sagas'

const loggerMiddleware = createLogger()

export default function configureStore(initialState = {}) {
  let composeEnhancers = compose; 
  const reduxSagaMonitorOptions = {};

  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

  }
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)

  const middlewares = [
      sagaMiddleware,
      thunkMiddleware,
      loggerMiddleware,
    ];

  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
    );

  sagaMiddleware.run(rootSaga);
  sagaMiddleware.run(formActionSaga);
  store.injectedReducers = {};
  store.injectedSagas = {};

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}