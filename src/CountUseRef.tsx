import React, { useState, useEffect, useRef } from "react";

export default function CountUseRef() {
  const [count, setCount] = useState(0);

  // 때때로 이펙트 안에 정의해둔 콜백에서 사전에 잡아둔 값을 쓰는 것이 아니라 최신의 값을 이용하고 싶을 때
  // 제일 쉬운 방법은 ref를 이용
  const latestCount = useRef(count);

  useEffect(() => {
    // 변경 가능한 값을 최신으로 설정
    latestCount.current = count;
    setTimeout(() => {
      console.log(`You clicked ${latestCount.current} times`);
    }, 3000);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
