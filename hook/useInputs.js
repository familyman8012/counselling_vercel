import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "WRITE":
      return {
        ...state,
        [action.target.name]: action.target.value,
      };
  }
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (data) => {
    dispatch({ type: "WRITE", target: data });
  };
  return [state, onChange];
}
