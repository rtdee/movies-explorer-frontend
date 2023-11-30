import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ loggedIn, element }) {
  return (
    !loggedIn ? <Navigate to='/' replace/> : element
)}

export default ProtectedRoute;