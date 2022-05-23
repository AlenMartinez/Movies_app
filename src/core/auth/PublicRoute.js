
import { Navigate  } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

function PublicRoute({ children }) {

  const auth = localStorage.getItem('token');
  return auth ? <Navigate to="/" />  : children;
}
export default PublicRoute