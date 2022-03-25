import { createContext } from "react";
import { useStorage } from '../utils/useStorage'
const Auth = createContext({
  token: null,
  setToken: () => {},
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useStorage('token');

  return (
    <Auth.Provider value={{ token, setToken }}>
      {children}
    </Auth.Provider>
  )
}

export { Auth, AuthProvider };