import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Flex } from "antd";

function App() {
  const [count, setCount] = useState(0);

  const increment = (value: number) => {
    setCount((count) => count + value);
  };

  const decrement = (value: number) => {
    setCount((count) => count - value);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{count}</p>
        <Flex gap={6} justify="center">
          <button onClick={() => increment(3)}>increment</button>
          <button onClick={() => decrement(2)}>decrement</button>
        </Flex>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
