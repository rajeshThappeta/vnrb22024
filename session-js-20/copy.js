//create copy of primitives
let a=10;

console.log("a is ",a);
//create copy
let copyA=a;

console.log("copy of a is ",copyA)

//test
a=120;
console.log("a is ",a);
console.log("copy of a is ",copyA);

//create copy of ref types
let obj={
    x:10,
    y:20
}

//create copy
//let copyObj=obj; //X
//let copyObj=Object.assign({},obj)
let copyObj={...obj}

console.log("obj is ",obj)
console.log("copy obj is ",copyObj)

//test
obj.x=120;
console.log("obj is ",obj)
console.log("copy obj is ",copyObj)


let ar=[1,2,3]
let copyAr=[...ar]