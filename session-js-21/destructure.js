//packing
let ar=[10,20,30]
let obj={
    a:1,
    b:2
}


//unpacking
console.log(ar[0])
console.log(ar[1])

console.log(obj.a)
console.log(obj.b)


//destructure array
let [x,y,z]=ar;
console.log(x)
console.log(y)
console.log(z)

//destructure obj
let {a,b}=obj;
console.log(a)
console.log(b)