import React from 'react';
import { Navigate  } from 'react-router-dom';

function PublicRoute({ children }) {
    console.log('public')
  const auth = false;
  return auth ? <Navigate to="/" />  : children;
}
export default PublicRoute