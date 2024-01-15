import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import fetchSlice from './fetch_slice';

import rootSaga from './root_sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    fetchData: fetchSlice,
  },
  middleware: () => {
    return [sagaMiddleware];
  },
});

sagaMiddleware.run(rootSaga);

export default store;
