let emp = {
  empid: 100,
  firstName: "ravi",
  lastName: " kumar",
  age: 30,
  isWorking: true,
  skills: ["css", "js", "angular", "reactjs"],
  address: {
    street: "KPHB",
    city: "hyderabad",
    pincode: 500089,
    countryName: "India",
  },
  //method
  getFullName: function () {
    return this.firstName + this.lastName;
  },
};

console.log(emp.age);
console.log(emp.address);
console.log(emp.getFullName())


function test(){}
test()
