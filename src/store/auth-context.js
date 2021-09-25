import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userToken: null,
  login(token) {},
  logout() {},
});

const AuthContextProvider = ({ children }) => {

  const [token, setToken] = useState(null);
  const isLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
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
