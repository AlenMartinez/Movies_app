import React from 'react';

import { Navigate  } from 'react-router-dom';
import Dashboard from '../../container/Dashboard'

function PrivateRoute({ children }) {
 const auth = localStorage.getItem('token');
  return auth ? 
        <Dashboard> { children}</Dashboard> 
        :
        <Navigate to="/login" />;
}
export default PrivateRoute