import { useState } from "react";

function Child({ a, b, counter, setCounter, getDataFromChild }) {
  //{ a : 100 ,b : 20}

  let c = 1234;

  return (
    <div className="bg-primary p-5">
      <h2>Child</h2>
      <h2>{a}</h2>
      <h2>{b}</h2>
      <h2>{counter}</h2>
      <button className="btn btn-light" onClick={() => setCounter(counter + 1)}>
        Increment counter
      </button>

      <button className="btn btn-danger" onClick={()=>getDataFromChild(c)}>
      Send to parent
      </button>
    </div>
  );
}

export default Child;
