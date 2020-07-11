import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleAlertClick = () => {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
}
