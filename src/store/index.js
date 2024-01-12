import { configureStore } from "@reduxjs/toolkit";
import consoleSlice from "./console_slice";

const store = configureStore({
  reducer: {
    cons: consoleSlice,
  },
});

export default store;
