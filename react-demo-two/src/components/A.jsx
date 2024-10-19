import D from "./D";
import E from "./E";
import {useContext} from 'react';
import { counterContextObj } from "../contexts/CounterContext";

function A() {

    //access state from context
     const {counter,setCounter}= useContext(counterContextObj)

  return (
    <div className="text-center bg-info p-5">
      <h1>Component -A</h1>
      <h2 className="text-white">Counter - {counter}</h2>

      <div className="d-flex justify-content-around">
        <D />
        <E />
      </div>
    </div>
  );
}

export default A;
