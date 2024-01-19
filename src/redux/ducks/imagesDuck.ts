import { AxiosResponse } from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

import { fetchData } from '../../api';

const FETCH = 'fetchData/getDataFetch';

type State = {
  data: any[];
  isLoading: boolean;
};

const initialState: State = {
  data: [],
  isLoading: false,
};

const fetchSlice = createSlice({
  name: 'fetchData',
  initialState: initialState,
  reducers: {
    getDataFetch: (state: any) => {
      state.isLoading = true;
    },
    loadDataReduc: (state: any, action: any) => {
      state.data = action.payload;
    },
  },
});

export const { loadDataReduc, getDataFetch } = fetchSlice.actions;

function* getImagesSaga() {
  try {
    const response: AxiosResponse = yield fetchData();
    yield put(loadDataReduc(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetImages() {
  yield takeLatest(FETCH, getImagesSaga);
}

export default fetchSlice.reducer;
