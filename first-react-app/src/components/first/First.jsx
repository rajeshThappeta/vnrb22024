import "./First.css";

function First() {
  //state
  let a = 10;
  let username='rajesh';
  let student={
    sno:100,
    name:'ravi'
  };
  let marks=[90,56,47,89,56,57];
  let emps=[{eid:1,name:'kiran'},{eid:2,name:'vikas'},{eid:3,name:'bhanu'}]

  return (
    <div className="first">
      <h1 className="display-1 text-primary bg-warning">First component</h1>
      <h2>Value of a is {a}</h2>
      <h2>Username is {username}</h2>
      <h2>Sno : {student.sno}</h2>
      <h2>Name : {student.name}</h2>
      {
        marks.map((m,index)=> <h2 key={index}>{m}</h2>)
      }

      {
        emps.map(empObj=><div key={empObj.eid}>
            <h3>Eid: {empObj.eid}</h3>
            <h3>Name: {empObj.name}</h3>
        </div>)
      }
    </div>
  );
}

export default First;
