import React, { useState } from "react";

// 아래 과정으로 실행
//   1. 카운터를 3으로 증가시킨다
//   2. “Show alert” 을 누른다
//   3. 타임아웃이 실행되기 전에 카운터를 5로 증가시킨다

// 결과
//  "You clicked on: 3" 가 표시됨

// 해설
// handleAlertClick() 함수는 여러번 호출되지만(랜더링마다 한 번씩),
// 각각의 랜더링에서 함수 안의 count 값은 상수이자 독립적인 값(특정 랜더링 시의 상태)으로 존재함

export default function App() {
  const [count, setCount] = useState(0);

  const handleAlertClick = () => {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  };

  return (
    <div>
      <p> You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}> Click me </button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
}
