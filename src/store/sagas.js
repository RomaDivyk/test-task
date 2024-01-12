import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

import { loadData } from "./fetch_slice";

const url = `https://demo1353770.mockable.io/images`;

function* getDataSaga() {
  try {
    const response = yield axios.get(url);
    console.log("HELLO SAGA");
    if (!response.ok) {
      throw new Error(`Something wrong in fetch data`);
    }

    yield put(loadData(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetData() {
  yield takeLatest("GET_DATA", getDataSaga);
}
