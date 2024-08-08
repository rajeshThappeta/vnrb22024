//function declaration
 function findSum(n1,n2){
    return n1+n2;
 }


 //function expression
 let findSum2=function(n1,n2){
    return n1+n2;
 }

 //arrow function
 let findSum3=(n1,n2)=>n1+n2;
 


 let r1=findSum(1,2)
 let r2=findSum2(5,7)
 let r3=findSum3(100,200)
 console.log(r1)
 console.log(r2)
 console.log(r3)





 //function declaration
 function findSmall(a,b){
    if(a<b){
        return "a is small"
    }else if(a===b){
        return "both are eqaul"
    }else{
        return " b is small"
    }
 }


 let s1=findSmall(100,20)
 console.log(s1)

 //function expression
 let findSmall2=function (a,b){
    if(a<b){
        return "a is small"
    }else if(a===b){
        return "both are eqaul"
    }else{
        return " b is small"
    }
 }

 let s2=findSmall2(100,20)
 console.log(s2)


 //arrow function
 let findSmall3= (a,b)=>{
    if(a<b){
        return "a is small"
    }else if(a===b){
        return "both are eqaul"
    }else{
        return " b is small"
    }
 }