import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom'

function Login() {

  const {register,handleSubmit,formState:{errors}}=useForm()
  const navigate=useNavigate();
  const [userLoginErr,setUserLoginErr]=useState(null);

  function onUserLogin({username,password}){
     
      fetch(`http://localhost:3000/users?username=${username}&password=${password}`)
      .then(res=>res.json())
      .then(usersObjList=>{
        if(usersObjList.length===0){
          setUserLoginErr({message:"Username or Password is incorrect"})
        }else{
         //navigate to user-profile component and transfer current user obj to it
          navigate('/user-profile',{state:usersObjList[0]})
        }
      }).catch(err=>setUserLoginErr(err))
  }


  return (
    <div className="mt-4">
    <h1 className="display-3 text-center text-secondary">
      User login
    </h1>
    {/* user registration error message */}
    {
      userLoginErr!==null&& <p className='text-danger fs-1 text-center'>{userLoginErr.message}</p>
    }

    {/* from */}
    <form
      className="w-50 mx-auto mt-5"
      onSubmit={handleSubmit(onUserLogin)}
    >
      {/* username */}
      <div className="mb-3">
        <label className="form-label" htmlFor="un">
          Username
        </label>
        <input
          type="text"
          {...register("username",{required:true})}
          id="un"
          className="form-control"
        />
        {/* validation err msg for username */}
        {errors.username?.type==='required' && <p className='text-danger'>*Username is required</p>}
      </div>
      {/* password */}
      <div className="mb-3">
        <label className="form-label" htmlFor="pw">
          Password
        </label>
        <input
          type="password"
          {...register("password",{required:true})}
          id="pw"
          className="form-control"
        />
         {/* validation err msg for password */}
         {errors.password?.type==='required' && <p className='text-danger'>*Password is required</p>}
      </div>
     
     
      {/* submit button */}
      <button className="btn btn-outline-info d-block mx-auto" type="submit">
        Login
      </button>
    </form>
  </div>
  )
}

export default Login