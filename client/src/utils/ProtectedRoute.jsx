import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo?.verified && !userInfo?.isDeleted) {
    // If user is not authenticated, redirect to login
    return <Navigate to="/login" />;
  }

  // If user is authenticated, render the provided element
  return React.cloneElement(element);
};

export default ProtectedRoute;
