import React  from 'react';
import ReactDOM from 'react-dom/client';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
//styles
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './core/theme'
import CssBaseline from "@mui/material/CssBaseline";
//store
import { Provider } from 'react-redux'
import store from './store'

const Render = () => {
    return(
        <Provider store={store}>
                <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <App />
                </ThemeProvider>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Render/>);

reportWebVitals();
