import React, { useReducer, useEffect } from "react";
import App from "./App";

const initialState = {
  count: 0,
  step: 1
};

const reducer = (state: any, action: any) => {
  const { count, step } = state;
  if (action.type === "tick") {
    return { count: count + step, step };
  } else if (action.type === "step") {
    return { count, step: action.step };
  } else {
    throw new Error();
  }
};

export default function UseReducerComponent() {
  // 어떤 상태 변수가 다른 상태 변수의 현재 값에 연관되도록 설정하려고 한다면, 두 상태 변수 모두 useReducer 로 교체해야 할 수 있다.
  // setSomething(something => ...) 같은 코드를 작성하고 있다면, 대신 리듀서를 써보는 것을 고려하기 좋은 타이밍.
  // 리듀서는 컴포넌트에서 일어나는 “액션”의 표현과 그 반응으로 상태가 어떻게 업데이트되어야 할지를 분리한다.

  // ruducer를 사용했을때 장점
  //  - 리액트는 컴포넌트가 유지되는 한 dispatch 함수가 항상 같다는 것을 보장함.
  //  - App.tsx 예제에서 인터벌을 다시 구독할 필요조차 없다는 것.
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <>
      <h1>{count}</h1>
      <input
        value={step}
        onChange={e => {
          dispatch({
            type: "step",
            step: Number(e.target.value)
          });
        }}
      />
    </>
  );
}
