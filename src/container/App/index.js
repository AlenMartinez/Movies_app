import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import NavigationRoute  from './Routes'

function App() {
  return (
    <BrowserRouter>
        <NavigationRoute/>
    </BrowserRouter>
  );
}

export default App;
