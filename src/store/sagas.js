import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import { loadDataReduc } from './fetch_slice';

const url = `https://demo1353770.mockable.io/images`;

function* getDataSaga() {
  try {
    const response = yield axios.get(url);
    if (response.status !== 200) {
      throw new Error(`Something wrong in fetch data`);
    }
    yield put(loadDataReduc(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetData() {
  yield takeLatest('fetchData/getDataFetch', getDataSaga);
}
