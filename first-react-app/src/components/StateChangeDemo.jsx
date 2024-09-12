import {useState} from 'react';

function StateChangeDemo() {

  //state
  //let a=10;
   let [a, setA]=useState(10);
   let [companyName,setCompanyName]=useState('masterscoding')

  function handleChangeA(){
    setA(a+1)
  }

  function handleCompanyNameChange(){
 
    setCompanyName('full stack mastery')
  }

  return (
    <div>
      <h1>State Change Demo</h1>

       <h2>a is {a}</h2>
       {/* <button className="btn btn-info" onClick={handleChangeA}>Change value of a</button> */}

       <button className="btn btn-info" onClick={()=>setA(a+1)}>Change value of a</button>

       <h2>{companyName}</h2>
       <button className="btn btn-warning" onClick={handleCompanyNameChange}>Change company</button>
    </div>
  )
}

export default StateChangeDemo