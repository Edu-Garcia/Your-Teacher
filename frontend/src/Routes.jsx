import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { SearchPage } from './pages/SearchPage';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  )
}