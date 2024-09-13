import {useState,useEffect} from 'react'

function EffectDemo2() {


    let [counter1,setCounter1]=useState(100)
    let [counter2,setCounter2]=useState(500)


    useEffect(()=>{
        //effect
        console.log("effect executed")
    },[counter2])

  return (
    <div>
       <h1> Counter-1  : {counter1}</h1>
        <button className="btn btn-success" onClick={()=>setCounter1(counter1+1)}>+</button>

        <h1> Counter-2  : {counter2}</h1>
        <button className="btn btn-warning" onClick={()=>setCounter2(counter2+1)}>+</button>
    </div>
  )
}

export default EffectDemo2