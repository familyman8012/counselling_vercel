import { createAction, handleActions } from "redux-actions";

const MENU_MOVE = "MENU_MOVE";

export const menumove = createAction(MENU_MOVE);

const initialState = {
  menuLists: [
    { id: 1, link: "/", text: "홈", active: false },
    { id: 2, link: "/about", text: "심리상담센터소개", active: false },
    { id: 3, link: "/services", text: "심리상담서비스", active: false },
    { id: 4, link: "/apply", text: "신청하기", active: false },
    { id: 5, link: "/blog", text: "블로그", active: false },
    { id: 6, link: "/contacts", text: "사연등록", active: false },
  ],
};

const header = handleActions(
  {
    [MENU_MOVE]: (state, { payload: id }) => ({
      menuLists: state.menuLists.map((item) =>
        item.id === id ? { ...item, active: true } : item
      ),
    }),
  },
  initialState
);

export default header;
