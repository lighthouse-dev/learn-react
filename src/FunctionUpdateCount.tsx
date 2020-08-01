import React from "react";
import { useState, useEffect } from "react";

export default function FunctionUpdateCount() {
  const [count, setCount] = useState(0);

  // 문제를 해결하기 위해 전에 무엇 때문에 count 를 쓰고 있나?
  //   오로지 setCount 를 위해 사용하고 있는 것으로 보임
  //   이 경우에 스코프 안에서 count 를 쓸 필요가 전혀 없다
  // 이전 상태를 기준으로 상태 값을 업데이트 하고 싶을 때는, setState 에 함수 형태의 업데이터를 사용하면 됨
  useEffect(() => {
    const id = setInterval(() => {
      // 리액트는 현재의 count 를 이미 알고 있다
      // 우리가 리액트에게 알려줘야 하는 것은 지금 값이 뭐든 간에 상태 값을 하나 더하라는 것
      // 그게 정확히 setCount(c => c +1) 이 의도하는 것
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}
