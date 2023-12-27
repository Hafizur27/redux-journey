import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count > 0 ? (state.count = state.count - 1) : state.count;
    },
    incrementByValue: (state, action) => {
      state.count = state.count + action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, incrementByValue, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
