import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function PrivateRoutes({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to='/login' />;
}

export default PrivateRoutes;
