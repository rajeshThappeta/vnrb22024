//object literal (objects of different types)
let student={
    sno:100,
    name:'john',
    age:21
}

let product={
    pno:1111,
    pname:'tv',
    brand:'sony',
    price:4000000
}


let computer={
    brand:"apple",
    chip:"cilicon",
    price:88888888
}


// create 1000 student objects  10000 x 10 = 100000
// 25 + 10000= 10025
//class (multiple objects of same type)
    //blueprint(class)
    class Student{
        //properties
            sno;
            name;
            age;

        //constructor(special method- it executes when object is created)
        constructor(sno,name,age){
            //object initialization logic
            this.sno=sno;
            this.name=name;
            this.age=age;

        }

        //methods
    }


    //create student objects
    let std1=new Student(100,'ravi',21)
    console.log(std1)

    let std2=new Student(200,'manasa',20)
    console.log(std2)












    //create 5 product objects
        //create product class
        class Product{
            //properties
            pno;
            name;
            price;
            brand;
            //constructor
            constructor(pno,name,price,brand){
                this.pno=pno;
                this.name=name;
                this.price=price;
                this.brand=brand
            }

            //methods
            getProductBrand(){
                return this.brand;
            }
        }

        //create product objects
        let pr1=new Product(100,'tv',30000,'sony')
        let pr2=new Product(200,'washing machine',60000,'LG')
        let pr3=new Product(300,'home theater',5000000,'bose')
        console.log(pr1.getProductBrand())
        console.log(pr2.getProductBrand())
        console.log(pr3)