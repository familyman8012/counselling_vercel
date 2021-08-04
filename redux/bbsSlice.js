import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modifyData: null,
};

export const bbsSlice = createSlice({
  name: "bbs",
  initialState,
  reducers: {
    loadModify: (state, { payload: postid }) => {
      state.postid = postid;
    },
  },
});

export const { loadModify } = bbsSlice.actions;
export default bbsSlice.reducer;
