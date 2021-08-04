import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../headerSlice";
import productReducer from "../productSlice";
import rateReducer from "../rateSlice";
import bbsReducer from "../bbsSlice";

import createSagaMiddleware from "redux-saga"; // 추가
import { all } from "redux-saga/effects"; // 추가
import imgReducer from "../imgSliceSaga"; //추가
import { watchUnsplash } from "../imgSliceSaga"; // 추가

const sagaMiddleware = createSagaMiddleware(); // 추가
function* rootSaga() {
  // 추가
  yield all([watchUnsplash()]); // 추가
}

const createStore = () => {
  const store = configureStore({
    reducer: {
      header: headerReducer,
      product: productReducer,
      rate: rateReducer,
      bbs: bbsReducer,
      unsplashImg: imgReducer, // 추가
    },
    devTools: true,
    middleware: [sagaMiddleware], // 추가
  });
  sagaMiddleware.run(rootSaga); // 추가
  return store;
};

export default createStore;
