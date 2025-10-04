import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Flex, List, Spin, Typography } from "antd";
import { todosStore } from "./store/todos.store";
import { useEffect } from "react";
import { Wrapper } from "./components/Wrapper";
import "./App.css";

const { Text } = Typography;

const App = () => {
  const { todos, getAll, isLoading } = todosStore;

  console.log(todos);

  useEffect(() => {
    getAll();
  }, [getAll]);

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
        <Wrapper />

        {!isLoading ? (
          <List
            bordered
            dataSource={todos}
            renderItem={(todo) => (
              <List.Item>
                <Text>
                  {todo.todo} - {todo.completed ? "Done" : "In progress"}
                </Text>
              </List.Item>
            )}
          />
        ) : (
          <Spin />
        )}

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Flex>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
