import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  login(id) {},
  logout() {},
});

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let userId = null;

  const loginHandler = (id) => {
    setIsLoggedIn(true);
    userId = id;
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    userId = null;
  };
  const authdata = {
    isLoggedIn,
    userId,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={authdata}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
