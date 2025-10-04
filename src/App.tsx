import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Flex, Typography } from "antd";
import { counterStore } from "./store/counter.store";
import { observer } from "mobx-react-lite";

const { Title } = Typography;

const App = observer(() => {
  const {
    count,
    increment,
    decrement,
    total,
    savedCount,
    saveCount,
    removeSavedCount,
  } = counterStore;

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
      <Flex vertical gap={6} className="card">
        <Title>Result {count}</Title>
        <Flex gap={6} justify="center">
          <button onClick={() => increment(3)}>increment</button>
          <button onClick={() => decrement(2)}>decrement</button>
        </Flex>
        <Title>Saved number {savedCount}</Title>
        <Button type="primary" block onClick={saveCount}>
          Add number
        </Button>
        <Button type="dashed" block danger onClick={removeSavedCount}>
          Clear number
        </Button>
        <Title>Final number {total}</Title>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Flex>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
});

export default App;
