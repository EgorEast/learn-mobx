import { Button, Flex, Typography } from "antd";
import { CounterStore } from "../store/counter.store";

const { Title } = Typography;

export const Counter = ({
  count,
  increment,
  decrement,
  total,
  savedCount,
  saveCount,
  removeSavedCount,
}: Omit<CounterStore, "_count">) => {
  return (
    <>
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
    </>
  );
};
