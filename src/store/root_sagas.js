import { all, fork } from "redux-saga/effects";
import { watchGetData } from "./sagas";

const rootSaga = function* () {
  yield all([fork(watchGetData)]);
};

export default rootSaga;
