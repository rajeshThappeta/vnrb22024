//normal params
function findSum1(a,b){
    let sum=a+b;
    return sum;
}

console.log(findSum1())

//default value params
function findSum2(a=0,b=0){
    let sum=a+b;
    return sum;
}


console.log(findSum2(10,20))


//rest params
function findSum3(...a){
    if(a.length===0){
        console.log("plz supply atleast 2 args")
    }else{
   return a.reduce((acc,element)=>acc+element)
    }

}
console.log(findSum3())