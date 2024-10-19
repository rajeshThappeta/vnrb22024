import {createContext, useEffect, useState} from 'react';
export const usersContextObj=createContext();


function UsersContext({children}) {

    let [users,setUsers]=useState([])

      useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(usersData=>
            {
                console.log(usersData)
                setUsers(usersData)
            
            })
        .catch(err=>console.log(err))
      },[])

  return (
    <usersContextObj.Provider value={{users}}>
        {children}
    </usersContextObj.Provider>
  )
}

export default UsersContext