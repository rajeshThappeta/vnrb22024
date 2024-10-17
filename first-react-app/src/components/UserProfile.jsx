import {useState} from 'react';
import {useLocation} from 'react-router-dom'

function UserProfile() {

  //get state that sent by useNavigate hook
  const obj= useLocation()
  const [currentUser,setCurrentUser]=useState(obj.state)

  

  return (
    <div className='container my-5'>
      <ul className="list-unstyled fs-1 text-primary text-center">
        <li>{currentUser.username}</li>
        <li>{currentUser.password}</li>
        <li>{currentUser.email}</li>
        <li>{currentUser.dob}</li>
      </ul>

    </div>
  )
}

export default UserProfile