import React from 'react';
import {Link,Outlet} from 'react-router-dom'

function Technologies() {
  return (
    <div>
       <ul className="nav justify-content-around mt-4 fs-4">
        <li className="nav-item">
          <Link to="java" className='nav-link'>Java</Link>
        </li>
        <li className="nav-item">
          <Link to="nodejs" className='nav-link'>Node</Link>
        </li>
        <li className="nav-item">
          <Link to="vue" className='nav-link '>Vue</Link>
        </li>
       
      </ul>

      {/* placeholder of components */}
      <Outlet />
    </div>
  )
}

export default Technologies