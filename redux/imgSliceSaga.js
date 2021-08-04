import { createSlice } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { getSplashImage } from "@/imgGet";

const initialState = {
  isLoading: false,
  images: [],
  error: null,
};

export const imgSlice = createSlice({
  name: "UNSPLASH",
  initialState,
  reducers: {
    load: (state) => {
      state.isLoading = true;
    },
    loadSuccess: (state, { payload: images }) => {
      state.isLoading = false;
      state.images = images;
    },
    loadFail: (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error;
    },
  },
});

function* handleImageLoad() {
  try {
    const images = yield call(getSplashImage);
    yield put(loadSuccess(images));
  } catch (err) {
    yield put(loadFail(err));
  }
}

export function* watchUnsplash() {
  yield takeLatest(load, handleImageLoad);
}

export const { load, loadSuccess, loadFail } = imgSlice.actions;
export default imgSlice.reducer;
