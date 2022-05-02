import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/material";
import {Provider} from "react-redux";
import store, {persistor} from "./store/duck";
import {PersistGate} from 'redux-persist/integration/react'

const theme = createTheme({
    palette: {
        mode: 'light'
    },
     components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    color: '#fff'
                }
            }
        }
     }
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
