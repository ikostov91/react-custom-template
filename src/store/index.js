import { compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducer from "../store/reducers/index";
import rootSaga from "../store/sagas/index";
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';

export function configureAppStore(initialState = {}) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  // const middlewareEnhancer = applyMiddleware(sagaMiddleware)
  // const composedEnhancers = composeEnhancers(middlewareEnhancer)

  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    preloadedState: initialState,
    // enhancers: composedEnhancers
  });

  sagaMiddleware.run(rootSaga);
  return store;
}

const store = configureAppStore();

export default store;