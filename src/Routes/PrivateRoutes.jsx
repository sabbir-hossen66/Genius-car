import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  if (loading) {
    <span className="text-center loading loading-spinner text-info"></span>
  }
  if (user?.email) {
    return children
  }
  return <Navigate to={'/login'} replace></Navigate>
};

export default PrivateRoutes;