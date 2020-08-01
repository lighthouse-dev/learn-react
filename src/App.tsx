import React from "react";
import LieDepsCount from "./LieDepsCount";
import WriteDepsCount from "./WriteDepsCount";
import FunctionUpdateCount from "./FunctionUpdateCount";

export default function App() {
  return (
    <>
      {/* 의존성으로 거짓말을 하면 생기는 일 */}
      <LieDepsCount />

      {/* 의존성을 솔직하게 적는 두 가지 방법 */}
      {/*   1. 첫 번째 방법은 컴포넌트 안에 있으면서 이펙트에서 사용되는 모든 값이 의존성 배열 안에 포함되도록 고치는 것 */}
      <WriteDepsCount />
      {/*   2. 이펙트가 자급자족 하도록 만들기 */}
      <FunctionUpdateCount />
    </>
  );
}
