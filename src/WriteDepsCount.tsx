import React from "react";
import { useState, useEffect } from "react";

export default function WriteDepsCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [count]);
  // 이렇게 하면 문제를 해결하겠지만
  // count 값이 바뀔 때마다 인터벌은 해제되고 다시 설정될 것

  return <h1>{count}</h1>;
}
