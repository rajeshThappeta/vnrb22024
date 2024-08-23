//Creator of  promise
function createPromise(){
    let futureCondition=false;
    //create and return a promise object
    return new Promise((fulfilled,rejected)=>{
            if(futureCondition===true){
                fulfilled('promise is fulfilled')
            }else{
                rejected('Promise is rejected')
            }
    })
}



//Consumer of Promise
createPromise()
.then((msg)=>{ console.log(msg)})
.catch((err)=>{console.log(err)})


//console.log(createPromise())
//Pending
//Fulfilled or rejected (settled)









