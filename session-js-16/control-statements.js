//decision making statements
let n1 = 20;
let n2 = 20;

//if
if (n1 < n2) {
  console.log(n1, " is small");
}

//f-else
if (n1 < n2) {
  console.log(n1, " is small");
} else {
  console.log(n2, " is small");
}

//if-else-if
if (n1 < n2) {
  console.log(n1, " is small");
} else if (2) {
  console.log("both are eqaul");
} else {
  console.log(n2, " is small");
}

//Iteration statements(Loops)
//for loop
for (let x = 1; x <= 5; x++) {
  console.log("loop running for ", x, " time");
}

//while loop
let x = 1;
while (x <= 5) {
  console.log("loop running for ", x, " time");
  x++;
}

//direct selection statement(switch)
//switch statement
switch (3) {
  case 1:
    console.log("first case");
    break;
  case 2:
    console.log("second case");
    break;
  default:
    console.log("no choice found");
}
