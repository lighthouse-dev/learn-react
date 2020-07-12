import React, { useEffect, useState } from "react";

// 본질적으로 클린업의 목적은 구독과 같은 이펙트를 “되돌리는” 것
// 리액트는 브라우저가 페인트 하고 난 뒤에야 이펙트를 실행
// 이렇게 하여 대부분의 이펙트가 스크린 업데이트를 가로막지 않기 때문에 앱을 빠르게 만들어줌
// 마찬가지로 이펙트의 클린업도 미뤄집니다. 이전 이펙트는 새 prop과 함께 리랜더링 되고 난 뒤에 클린업

// 첫 번째 랜더링에서 prop 이 {id: 10} 이고, 두 번째 랜더링에서 {id: 20} 일 때의 흐름
//   리액트가 {id: 20} 을 가지고 UI를 랜더링한다.
//   브라우저가 실제 그리기를 한다. 화면 상에서 {id: 20} 이 반영된 UI를 볼 수 있다.
//   리액트는 {id: 10} 에 대한 이펙트를 클린업한다.
//   리액트가 {id: 20} 에 대한 이펙트를 실행한다.

// 해설
//   리액트는 브라우저가 페인트 하고 난 뒤에야 이펙트를 실행
//   이렇게 하여 대부분의 이펙트가 스크린 업데이트를 가로막지 않기 때문에 앱을 빠르게 만들어줌
//   마찬가지로 이펙트의 클린업도 미뤄짐. 이전 이펙트는 새 prop과 함께 리랜더링 되고 난 뒤에 클린업.
const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("effect");
    console.log(name + "/" + nickname);

    // 만약 컴포넌트가 언마운트되기 전이나, 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면
    // useEffect 에서 뒷정리(cleanup) 함수를 반환해주어야 함
    return () => {
      console.log("cleanup");
      console.log(name + "/" + nickname);
    };
  });

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}
