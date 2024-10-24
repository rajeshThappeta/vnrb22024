import {useState,useContext,useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom'
import { loginContextObj } from '../contexts/LoginContext';



function Login() {

  const {register,handleSubmit,formState:{errors}}=useForm()
  const navigate=useNavigate();
  const [userLoginErr,setUserLoginErr]=useState(null);
  const { loginError, loginStatus, onUserLogin}=useContext(loginContextObj)


  useEffect(()=>{
    if(loginStatus===true){
      navigate('/user-profile')
    }
  },[loginStatus])
   

  return (
    <div className="mt-4">
    <h1 className="display-3 text-center text-secondary">
      User login
    </h1>
    {/* user registration error message */}
    {
      loginError!==null&& <p className='text-danger fs-1 text-center'>{loginError.message}</p>
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