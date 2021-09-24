import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: '',
  login(Id) {},
  logout() {},
});

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let userId = '';

  const loginHandler = (id) => {
    setIsLoggedIn(true);
    userId = id;
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    userId = '';
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
