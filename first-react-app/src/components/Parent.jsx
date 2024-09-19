import Child from "./Child";
import { useState } from "react";

function Parent() {
  //state
  let a = 100;
  let b = 20;
  let [counter, setCounter] = useState(1);
  let [childData,setChildData]=useState(0)

  //param function
  function getDataFromChild(x) {
    setChildData(x)
  }

  return (
    <div className="bg-warning p-5">
      <h2>Parent</h2>
      <h2>{counter}</h2>
      <h2>Data from Child {childData}</h2>
      {/* nest CHild */}
      <Child
        a={a}
        b={b}
        counter={counter}
        setCounter={setCounter}
        getDataFromChild={getDataFromChild}
      />
    </div>
  );
}

export default Parent;
