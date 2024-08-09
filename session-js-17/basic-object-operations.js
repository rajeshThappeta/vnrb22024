
let person={
    id:1,
    name:'ravi'
}


//insert new prop
    person.age=21;
    person.city='hyd'

//delete prop
    delete person.id;
    delete person.name;

//update
    person.age=50;
    person.city='chennai'

    console.log(person)