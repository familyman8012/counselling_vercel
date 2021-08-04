import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 5,
  desc: ["terrible", "bad", "normal", "good", "wonderful"],
};

export const rateSlice = createSlice({
  name: "rate",
  initialState,
  reducers: {
    chgRate: (state, action) => {
      if (action.payload === null) {
        state.value = state.value;
      } else {
        state.value = action.payload;
      }
    },
  },
});

export const { chgRate } = rateSlice.actions;
export default rateSlice.reducer;
