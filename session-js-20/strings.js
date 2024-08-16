//How string stored in memory
let wish="good morning to all";
// "abcd ef" --------> ['a','b','c','d','','e','f']
console.log(wish[100])
console.log(wish.length)

//get char
console.log(wish.charAt(0))

//join strings
let s1='hello'
let s2=' how are you'
let s3=s1+s2;
let s4=s1.concat(s2)
console.log(s3)
console.log(s4)

//get sub-string
console.log(wish.substring(1,4)) //ood

//get index of a char
console.log(wish.indexOf('l'))

//case conversion
console.log(wish.toUpperCase())
console.log(wish.toLowerCase())

//split by a delimiter
console.log(wish.split(' ')) //['wish','morning','to','all']
console.log(wish.split(''))
