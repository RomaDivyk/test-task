import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { all, fork } from 'redux-saga/effects';

import fetchSlice from './ducks/imagesDuck';
import { watchGetImages } from './ducks/imagesDuck';

const rootSaga = function* () {
  yield all([fork(watchGetImages)]);
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    fetchData: fetchSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
