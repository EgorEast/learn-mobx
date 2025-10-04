import { CounterStore } from "../store/counter.store";
import { observer } from "mobx-react-lite";
import { Counter } from "./Counter";

const couner1 = new CounterStore();
const couner2 = new CounterStore();

export const Wrapper = observer(() => {
  return (
    <>
      <Counter {...couner1} count={couner1.count} total={couner1.total} />
      <Counter {...couner2} count={couner2.count} total={couner2.total} />
    </>
  );
});
