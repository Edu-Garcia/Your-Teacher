import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext'; 
import { RoutesPrivate } from './components/RoutesPrivate'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { SearchPage } from './pages/SearchPage';
import { AnnouncementView } from './pages/AnnouncementView';
import { RegisterTeacher } from './pages/RegisterTeacher';
import { NewAnnouncement } from './pages/NewAnnouncement';

import { PageCalendar } from './pages/calendar';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<RoutesPrivate />}>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/search/:id" element={<AnnouncementView />} />
            <Route path="/register/teacher" element={<RegisterTeacher />} />
            <Route path="/register/announcement" element={<NewAnnouncement />} />
            <Route path="/calendar" element={<PageCalendar />} />
          </Route>
        </Routes>
      </AuthProvider>
      </BrowserRouter>
  )
}