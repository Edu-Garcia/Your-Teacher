import { createContext, useState } from "react";
import { useStorage } from '../utils/useStorage'
const Auth = createContext({
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
  username: ''
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useStorage('token');
  const [user, setUser] = useState('');
  const username = user?.capitalized_fullname?.split(' ')[0] || '';

  return (
    <Auth.Provider value={{ token, setToken, user, setUser, username }}>
      {children}
    </Auth.Provider>
  )
}

export { Auth, AuthProvider };