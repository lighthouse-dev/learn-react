import React, { useState, useEffect } from "react";

// <렌더링 상세 순서>
// 1. 첫번째 랜더링
//   리액트: state가 0 일 때의 UI를 보여줘.
//   컴포넌트
//     - 여기 랜더링 결과물로 <p>You clicked 0 times</p> 가 있어.
//     - 그리고 모든 처리가 끝나고 이 이펙트를 실행하는 것을 잊지 마: () => { document.title = 'You clicked 0 times' }.
//   리액트: 좋아. UI를 업데이트 하겠어. 이봐 브라우저, 나 DOM에 뭘 좀 추가하려고 해.
//   브라우저: 좋아, 화면에 그려줄게.
//   리액트: 좋아 이제 컴포넌트 네가 준 이펙트를 실행할거야.
//     - () => { document.title = 'You clicked 0 times' } 를 실행하는 중.

// 2. 버튼을 클릭했을때 랜더링
//   컴포넌트: 이봐 리액트, 내 상태를 1 로 변경해줘.
//   리액트: 상태가 1 일때의 UI를 줘.
//   컴포넌트
//     - 여기 랜더링 결과물로 <p>You clicked 1 times</p> 가 있어.
//     - 그리고 모든 처리가 끝나고 이 이펙트를 실행하는 것을 잊지 마: () => { document.title = 'You clicked 1 times' }.
//   리액트: 좋아. UI를 업데이트 하겠어. 이봐 브라우저, 나 DOM에 뭘 좀 추가하려고 해.
//   브라우저: 좋아, 화면에 그려줄게.
//   리액트: 좋아 이제 컴포넌트 네가 준 이펙트를 실행할거야.
//     - () => { document.title = 'You clicked 1 times' } 를 실행하는 중.

export default function App() {
  const [count, setCount] = useState(0);

  // 리액트는 이펙트 함수를 기억해 놨다가 DOM의 변화를 처리하고 브라우저가 스크린에 그리고 난 뒤 실행됨
  //   따라서 Document의 title을 업데이트하는 동작을 정의했지만, 사실 매 랜더링 마다 다른 함수라는 뜻
  //   그리고 각각의 이펙트 함수는 그 랜더링에 “속한” props와 state를 보게됨.
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
