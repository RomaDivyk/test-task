import { createSlice } from '@reduxjs/toolkit';

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

export default fetchSlice.reducer;
