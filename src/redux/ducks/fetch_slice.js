import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

const FETCH = 'fetchData/getDataFetch';

const url = `https://demo1353770.mockable.io/images`;

const initialState = {
  data: [],
  isLoading: false,
};

const fetchSlice = createSlice({
  name: 'fetchData',
  initialState: initialState,
  reducers: {
    getDataFetch: (state) => {
      state.isLoading = true;
    },
    loadDataReduc: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { loadDataReduc, getDataFetch } = fetchSlice.actions;

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
  yield takeLatest(FETCH, getDataSaga);
}

export default fetchSlice.reducer;
