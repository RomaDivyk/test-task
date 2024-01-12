import { createSlice } from "@reduxjs/toolkit";

const consoleSlice = createSlice({
  name: "cons",
  initialState: {
    value: "Hello World!",
  },
  reducers: {
    showConsole: (state) => {
      console.log(state, "REDUX IS WORKING!!!!");
    },
  },
});

export const consoleAction = consoleSlice.actions;

export default consoleSlice.reducer;
