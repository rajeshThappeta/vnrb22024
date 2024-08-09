//Array is an Ordered collection
//array of numbers
let ar = [10, 20, 30, 40];
//array of strings
let names = ["ravi", "kiran", "manasa"];

// console.log(ar[0])
// console.log(ar[1])
// console.log(ar[2])
// console.log(ar[3])
console.log(ar.length);
console.log(typeof ar);

//iterate
for (let index = 0; index <= ar.length; index++) {
  console.log(ar[index]);
}

//while
let index = 0;
while (index < ar.length) {
  console.log(ar[index]);
  index++;
}

//for-of loop
for (let element of ar) {
  console.log(element);
}
