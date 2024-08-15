//person(parent class or base class or super class)
class Person{
    name;
    address;
    age;
    mobile;
    constructor(name,address,age,mobile){
        this.name=name;
        this.address=address;
        this.age=age;
        this.mobile=mobile;

    }
}

//student is a person
class Student extends Person{
   
    course;
    fee;
    constructor(name,address,age,mobile,course,fee){
        //pass the first 4 values to parent constructor
        super(name,address,age,mobile)
        this.course=course;
        this.fee=fee;
    }
}



let std=new Student('ravi',{city:'hyd'},21,99999,'B.Tech',5000000)
console.log(std.toString())







//emp is a person
class Emp extends Person{
  
    salary;
    company;
    constructor(name,address,age,mobile,salary,company){
        super(name,address,age,mobile);
        this.salary=salary;
        this.company=company;
    }
}

let emp=new Emp('madhu',{city:'chennai'},21,99999,600000,'JP morgan')
console.log(emp)




//manager is a person
class Manager extends Person{
   
    project;
}







let test={
    a:10,
    b:20
}

console.log(test)

