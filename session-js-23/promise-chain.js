// You meet frnd in 10 mins
function meetFrnd(){

    let avaialability=true;
    return new Promise((fulfilled,rejected)=>{
        setTimeout(()=>{
            if(avaialability===true){
                fulfilled("Hi frnd...")
            }else{
                rejected("Could not meet frnd")
            }
        },5000)
    })
   

}
// Order food after meet
function orderFood(){


    let foodAvailableStatus=false;
    return new Promise((fulfilled,rejected)=>{
        setTimeout(()=>{
            if(foodAvailableStatus===false){
                fulfilled("Order food")
            }else{
                rejected("Eat the available food")
            }
        },5000)
    })
}



//consuming these two promises
meetFrnd()
.then((msg)=>{
    console.log(msg)
    return orderFood()
})
.then(msg=>{
    console.log(msg)
})
.catch(err=>console.log(err))