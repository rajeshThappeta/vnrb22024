import { Link } from "react-router-dom";
import { useContext } from "react";
import { loginContextObj } from "../contexts/LoginContext";

function Header() {
  const { currentUser, loginStatus, userLogout } = useContext(loginContextObj);

  return (
    <div className="bg-dark text-white py-4">
      {/* navbar */}
      <ul className="nav justify-content-end fs-4">
        {loginStatus === false ? (
          <>
            <li className="nav-item">
              <Link to="" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="register" className="nav-link text-white">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="login" className="nav-link text-white">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to="technologies" className="nav-link text-white">
                Technologies
              </Link>
            </li>
          </>
        ) : (
          <li className="nav-item">
            <Link to="login" className="nav-link text-white" onClick={userLogout}>
              Logout 
              <span className="text-warning lead ms-3">{currentUser.username}</span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
