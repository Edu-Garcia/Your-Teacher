import React, { useContext } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { Auth } from '../../context/AuthContext';

const RoutesPrivate = () => {
  const { token } = useContext(Auth);
  const location = useLocation();

  return ( token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace /> );
}

export { RoutesPrivate };