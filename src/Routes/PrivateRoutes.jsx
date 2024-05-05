import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation();
  console.log(location.pathname);
  if (loading) {
    <span className="text-center loading loading-spinner text-info"></span>
  }
  if (user?.email) {
    return children
  }
  return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
};

export default PrivateRoutes;