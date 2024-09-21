import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'

function Register() {

  const {register,handleSubmit,formState:{errors}}=useForm()
  const navigate=useNavigate();
  const [err,setErr]=useState(null)

  function handleFormSubmit(newUser){
    //make HTTP POST req
    fetch('http://localhost:3000/users',
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(newUser)
        }).then(res=>{
           if(res.status===201){
            //programatically navigate to login component
              navigate('/login')
           }else{
              setErr({message:res.message})
           }
        }).catch(err=>setErr(err));
  }

  return (
    <div className="mt-4">
      <h1 className="display-3 text-center text-secondary">
        User registration
      </h1>
      {/* user registration error message */}
      {
        err!==null&& <p className='text-danger fs-1 text-center'>{err.message}</p>
      }

      {/* from */}
      <form
        className="w-50 mx-auto mt-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* username */}
        <div className="mb-3">
          <label className="form-label" htmlFor="un">
            Username
          </label>
          <input
            type="text"
            {...register("username")}
            id="un"
            className="form-control"
          />
        </div>
        {/* password */}
        <div className="mb-3">
          <label className="form-label" htmlFor="pw">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="pw"
            className="form-control"
          />
        </div>
        {/* email */}
        <div className="mb-3">
          <label className="form-label" htmlFor="em">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            id="em"
            className="form-control"
          />
        </div>
        {/* date of birth */}
        <div className="mb-3">
          <label className="form-lable" htmlFor="db">
            Date of birth
          </label>
          <input
            type="date"
            {...register("dob")}
            id="db"
            className="form-control"
          />
        </div>
        {/* submit button */}
        <button className="btn btn-outline-info d-block mx-auto" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
