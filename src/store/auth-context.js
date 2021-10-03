import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userToken: null,
  login(token) {},
  logout() {},
});

let logoutTimer = null;

// const calculateRamainingTime = (expireTime) => {
//   const currentTime = new Date().getTime();
//   const adjExpireTime = new Date(expireTime).getTime();

//   const remainingTime = adjExpireTime - currentTime;

//   return remainingTime;
// }

const AuthContextProvider = ({ children }) => {
  const initialToken = JSON.parse(localStorage.getItem('userToken'));
  const [token, setToken] = useState(initialToken);
  const isLoggedIn = !!token;


   const logoutHandler = () => {
     localStorage.removeItem('userToken');
     setToken(null);
     clearTimeout(logoutTimer);
   };

  const loginHandler = (token) => {
    const tokenJson = JSON.stringify(token);
    localStorage.setItem('userToken', tokenJson);
    setToken(token);

    // const remainingTime = calculateRamainingTime('10000');
    logoutTimer =  setTimeout(logoutHandler, 20000);
  };


  const authdata = {
    isLoggedIn,
    userToken: token,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={authdata}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
