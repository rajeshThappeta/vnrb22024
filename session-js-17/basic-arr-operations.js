let numbers = [10, 20, 30, 40];

//INSERTION
//start

let l1 = numbers.unshift(1, 2);
console.log(numbers);
console.log(l1);

//end
let l2 = numbers.push(11, 12);
console.log(numbers);
console.log(l2);
//in between
numbers.splice(4, 0, 111, 222);
console.log(numbers);


//DELETION
    //start
    let rm1=numbers.shift()
    console.log(numbers)
    console.log(rm1)
    //end
    let rm2=numbers.pop()
    console.log(numbers)
    console.log(rm2)
    //in between
    let rm3=numbers.splice(3,2)
    console.log(numbers)
    console.log(rm3)

//UPDATION
    numbers.splice(2,1,100)
    console.log(numbers)