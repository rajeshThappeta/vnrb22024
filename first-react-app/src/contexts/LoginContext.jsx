//create context object
import { createContext, useState } from "react";
export const loginContextObj = createContext();

function LoginContext({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginError, setLoginError] = useState(null);

  //user login
  function onUserLogin({ username, password }) {
    fetch(
      `http://localhost:3000/users?username=${username}&password=${password}`
    )
      .then((res) => res.json())
      .then((usersObjList) => {
        console.log(usersObjList);
        if (usersObjList.length === 0) {
          setLoginError({ message: "Username or Password is incorrect" });
        } else {
          //update state of context
          setCurrentUser(usersObjList[0]);
          setLoginError(null);
          setLoginStatus(true);
        }
      })
      .catch((err) => {
        setLoginError(err);
      });
  }

  console.log(loginError);

  //user logout
  function userLogout() {
    //update state of context
    setCurrentUser(null);
    setLoginError(null);
    setLoginStatus(false);
  }

  return (
    <loginContextObj.Provider
      value={{ currentUser, setCurrentUser,loginError, loginStatus, userLogout, onUserLogin }}
    >
      {children}
    </loginContextObj.Provider>
  );
}

export default LoginContext;
