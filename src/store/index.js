import { compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducer from "../store/reducers/index";
import rootSaga from "../store/sagas/index";
import { configureStore } from '@reduxjs/toolkit';

export function configureAppStore(initialState = {}) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    preloadedState: initialState,
    enhancers: composeEnhancers
  });

  sagaMiddleware.run(rootSaga);

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../store/reducers/index', () => {
  //       const nextRootReducer = require('../store/reducers/index');
  //       store.replaceReducer(nextRootReducer);
  //   });
  // }

  return store;
}
 
const store = configureAppStore({});

export default store;