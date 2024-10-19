import { useContext } from "react";
import { counterContextObj } from "../contexts/CounterContext";

function I() {
  //access state from context
  const { counter, setCounter } = useContext(counterContextObj);

  return (
    <div className="bg-danger p-5">
      <h3>Component-I</h3>
      <h2 className="text-white">Counter - {counter}</h2>
      <button className="btn btn-warning" onClick={()=>setCounter(counter+1)}>Increment</button>
    </div>
  );
}

export default I;
