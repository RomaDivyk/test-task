import { AxiosResponse } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

import { fetchData } from '../../api';

const FETCH = 'fetchData/getDataFetch';

interface FetchData {
  id: number;
  img: string;
  comments: string;
}

type StateType = {
  data: FetchData[];
  isLoading: boolean;
};

const initialState: StateType = {
  data: [],
  isLoading: false,
};

const fetchSlice = createSlice({
  name: 'fetchData',
  initialState: initialState,
  reducers: {
    getDataFetch: (state: StateType) => {
      state.isLoading = true;
    },
    loadDataReduc: (state: StateType, action: PayloadAction<FetchData[]>) => {
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
