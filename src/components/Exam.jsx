import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "MINUS":
      return state - action.data;
    default:
      return state;
  }
}

export default function Exam() {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickplus = () => {
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "MINUS",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickplus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
}
