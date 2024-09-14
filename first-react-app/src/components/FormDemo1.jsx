import {useForm} from 'react-hook-form';


function FormDemo1() {

    const {register,handleSubmit,formState:{errors}}=useForm()


    console.log("form validation error is ",errors)

    //to get data of form
    function handleFormSubmit(userObj){
        console.log(userObj)
    }

  return (
    <div>
        <h1 className="display-3 text-secondary">Form Demo</h1>

        {/* form */}
        <form className="w-50 mx-auto mt-5 bg-light p-4" onSubmit={handleSubmit(handleFormSubmit)}>
            {/* first name */}
            <div className="mb-3">
                <label htmlFor="fn" className="form-label">First name</label>
                <input type="text"  {...register('firstname',{required:true,minLength:4})} id="fn" className="form-control" />
                {/* validtion error messages for first name */}
                {errors.firstname?.type==='required' && <p className='text-danger fs-6'>*First name is required</p>}
                {errors.firstname?.type==='minLength' && <p className='text-danger fs-6'>*Min length shoud be 4</p>}
            </div>
            {/* last name */}
            <div className="mb-3">
                <label htmlFor="ln" className="form-label">Last name</label>
                <input type="text" {...register('lastname')} id="ln" className="form-control" />
            </div>
            {/* last name */}
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" {...register('age',{min:1,max:100})} id="age" className="form-control" />
                {/* validation error messages for age */}
               {errors.age?.type==='min'&& <p className='text-danger fs-6'>*Min age should be 1</p>}
               {errors.age?.type==='max'&& <p className='text-danger fs-6'>*Max age should be less than 100</p>}
            </div>
            {/* email */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" {...register('email')} id="email" className="form-control" />
            </div>
            {/* dob */}
            <div className="mb-3">
                <label htmlFor="dob" className="form-label">Date of birth</label>
                <input type="date" {...register('dob')} id="dob" className="form-control" />
            </div>
            {/* submit button */}
            <button type="submit" className="btn btn-success">Signup</button>
        </form>
    </div>
  )
}

export default FormDemo1





//Validation rules
    //required
    //minLength
    //maxLength
    //min
    //max
    //pattern