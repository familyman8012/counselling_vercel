import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuLists: [
    { id: 1, link: "/", text: "홈", active: false },
    { id: 2, link: "/about", text: "심리상담센터소개", active: false },
    { id: 3, link: "/services", text: "심리상담서비스", active: false },
    { id: 4, link: "/apply", text: "신청하기", active: false },
    { id: 5, link: "/blog", text: "블로그", active: false },
    { id: 6, link: "/contact", text: "사연등록", active: false },
  ],
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    menuMove: (state, { payload: id }) => ({
      menuLists: state.menuLists.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      ),
    }),
  },
});

export const { menuMove } = headerSlice.actions;
export const selectMenuMove = (state) => state.header.menuLists;

export default headerSlice.reducer;
