import { createSlice } from "@reduxjs/toolkit";

const state = {
  data: [],
};

const fetchSlice = createSlice({
  name: "fetchData",
  initialState: state,
  reducers: {
    loadDataReduc: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const loadData = fetchSlice.actions;

export default fetchSlice.reducer;
