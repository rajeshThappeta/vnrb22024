import { useContext } from "react";
import { counterContextObj } from "../contexts/CounterContext";

function F() {
  //access state from context
  const { counter, setCounter } = useContext(counterContextObj);
  return (
    <div className="bg-primary p-5">
      <h3>Component-F</h3>
      <h2 className="text-white">Counter - {counter}</h2>
      <button
        className="btn btn-warning"
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export default F;
