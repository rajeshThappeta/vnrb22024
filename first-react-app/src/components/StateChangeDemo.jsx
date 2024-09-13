import { useState } from "react";

function StateChangeDemo() {
  //state
  //let a=10;
  let [a, setA] = useState(10);
  let [companyName, setCompanyName] = useState("masterscoding");
  let [person, setPerson] = useState({pid: 100,name: "Ravi",age: 32});
  let [marks,setMarks]=useState([10,20,30]);

  function handleChangeA() {
    setA(a + 1);
  }

  function handleCompanyNameChange() {
    setCompanyName("full stack mastery");
  }

  function handlePersonChange() {
    setPerson({...person,pid:200,name:"Bhanu"}) //{pid: 200,name: "Ravi",age: 32}
  }

  function addNewMark(){
    // setMarks([...marks,50])

     //create copy
     let copy=[...marks];
     //make changes on copy
     copy.splice(2,0,2000);
     //replace old one with copy
     setMarks(copy)
  }

  return (
    <div>
      <h1>State Change Demo</h1>

      <h2>a is {a}</h2>
      {/* <button className="btn btn-info" onClick={handleChangeA}>Change value of a</button> */}

      <button className="btn btn-info" onClick={() => setA(a + 1)}>
        Change value of a
      </button>

      <h2>{companyName}</h2>
      <button className="btn btn-warning" onClick={handleCompanyNameChange}>
        Change company
      </button>

      {/* person object state */}
      <p className="lead fs-1 mt-5">PID :{person.pid}</p>
      <p className="lead fs-1">Name :{person.name}</p>
      <p className="lead fs-1">Age :{person.age}</p>
      <button className="btn btn-danger" onClick={handlePersonChange}>Change person details</button>

      {/* marks array state */}
      {
        marks.map(m=><p className="fs-2" key={m}>{m}</p>)
      }

      <button className="btn btn-secondary" onClick={addNewMark}>Change marks list</button>
    </div>
  );
}

export default StateChangeDemo;
