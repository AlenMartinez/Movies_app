
import React from 'react';
import { Navigate  } from 'react-router-dom';


function PublicRoute({ children }) {

  const auth = localStorage.getItem('token');
  return auth ? <Navigate to="/" />  : children;
}
export default PublicRoute