import { all, fork } from 'redux-saga/effects';
import { watchGetData } from './fetch_slice';

const rootSaga = function* () {
  yield all([fork(watchGetData)]);
};

export default rootSaga;
