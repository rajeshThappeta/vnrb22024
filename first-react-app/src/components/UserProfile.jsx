import {useState,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { loginContextObj } from '../contexts/LoginContext';


function UserProfile() {

  //get state that sent by useNavigate hook
  
  const { currentUser,setCurrentUser}=useContext(loginContextObj)
  const {register,handleSubmit,setValue}=useForm()
  const [isEdit,setIsEdit]=useState(false)
  const navigate=useNavigate()


  function onEdit(){
    setIsEdit(true)
    //set values to edit form
    setValue('username',currentUser.username)
    setValue('password',currentUser.password)
    setValue('email',currentUser.email)
    setValue('dob',currentUser.dob)
  }


  function onSave(modifiedUser){
    setIsEdit(false)
    modifiedUser.id=currentUser.id;
    //http patch req
    fetch(`http://localhost:3000/users/${modifiedUser.id}`,
      {
        method:"PUT",
        'Content-Type':'application/json',
        body:JSON.stringify(modifiedUser)
      }).then(res=>res.json())
      .then(data=>setCurrentUser(data))
      .catch(err=>console.log(err))
  }


  function deleteUserById(id){
      fetch(`http://localhost:3000/users/${id}`,{method:"DELETE"})
      .then(res=>res.json())
      .then(data=>navigate('/login'))
      .catch(err=>console.log(err))
  }

  return (
    <div className='container my-5'>

      {
        isEdit===false ? <div>
        <ul className="list-unstyled fs-1 text-info text-center">
        <li>Username : <span className='text-secondary'> {currentUser.username}</span> </li>
        <li>Password : <span className='text-secondary'> {currentUser.password}</span> </li>
        <li>Email : <span className='text-secondary'> {currentUser.email}</span> </li>
        <li>Date of birth : <span className='text-secondary'> {currentUser.dob}</span> </li>
      </ul>
      <button className="btn btn-warning d-block mx-auto" onClick={onEdit}>Edit</button>
      <button className="btn btn-danger d-block mx-auto mt-4" onClick={()=>deleteUserById(currentUser.id)}>Delete</button>
        </div>:
       <div>
        <h1 className="text-center text-warning mb-5">Edit user</h1>
        <form className='w-50 mx-auto bg-light p-4' onSubmit={handleSubmit(onSave)}>
            <input type="text" {...register('username')} id="" className="form-control mb-3" />
            <input type="text" {...register('password')} id="" className="form-control mb-3" />
            <input type="email" {...register('email')} id="" className="form-control mb-3" />
            <input type="date" {...register('dob')} id="" className="form-control mb-3" />
            <button className="btn btn-success d-block mx-auto" type='submit'>Save</button>
        </form>
        </div>
      }

     
    </div>
  )
}

export default UserProfile