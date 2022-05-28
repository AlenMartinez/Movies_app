import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import NavigationRoute  from './Routes'
import Dashboard from '../Dashboard'

function App() {
  return (
    <BrowserRouter>
        <NavigationRoute/>
    </BrowserRouter>
  );
}

export default App;
