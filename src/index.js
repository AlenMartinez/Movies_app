import React  from 'react';
import ReactDOM from 'react-dom/client';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './core/theme'
import CssBaseline from "@mui/material/CssBaseline";

const Render = () => {
    return(
        <React.StrictMode>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <App />
                </ThemeProvider>
        </React.StrictMode>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Render/>);

reportWebVitals();
