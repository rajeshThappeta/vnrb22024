//JS object
let person={
    id:100,
    name:'ravi',
    age:21
}


//JS object to JSON
let personJson=JSON.stringify(person)

//JSON to JS object
let personObj=JSON.parse('{"id":100,"name":"ravi","age":21}')
console.log(personObj)

console.log(person)
console.log(personJson)
console.log(typeof person)
console.log(typeof personJson)