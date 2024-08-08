//global scope
let a=10;


function test(){
    //function scope
    let b=20;
    console.log(b)
   
    if(b===20){
         //block scope
        let c=30;
        console.log(c)
    }
   
}

test()
console.log(b)

