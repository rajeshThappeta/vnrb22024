console.log("first")

//make API request(HTTP Req)
function getPostsData(){
    fetch('https://jsonplaceholder.typicode.com/posts',{method:"GET"})
    .then(res=>  res.json())
    .then(posts=>console.log(posts))
    .catch(err=>console.log(err))
}


getPostsData()



function getUsers(){
    fetch('https://reqres.in/api/users?page=2')
    .then(res=>res.json())
    .then(users=>console.log(users))
    .catch(err=>console.log(err))
}


getUsers()




console.log("hello")