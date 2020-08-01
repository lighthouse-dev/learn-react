import React from "react";
import { useState, useEffect } from "react";

export default function LieDepsCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 이 이펙트는 한번만 실행됨
    // 왜냐면 리액트에게 빈 deps를 넘겨주는 거짓말을 했기 때문
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  // 숫자가 오로지 한 번만 증가
  // 첫 번째 랜더링에서
  //    count 는 0
  //    이펙트에서 setCount(count + 1) 는 setCount(0 + 1) 이라는 뜻
  // deps를 []라고 정의했기 때문에 이펙트를 절대 다시 실행하지 않고,
  // 결국 그로 인해 매 초마다 setCount(0 + 1) 을 호출하는 것

  return <h1>{count}</h1>;
}
