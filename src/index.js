import  React  from 'react';
import  ReactDOM  from 'react-dom/client';
import { Provider } from 'react-redux';
import {GoogleOAuthProvider} from "@react-oauth/google"

import {  applyMiddleware, compose, createStore} from 'redux';
// import {configureStore} from '@reduxjs/toolkit';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import thunk from 'redux-thunk';
import reducers from './reducers'

import  App  from './App';
import "./index.css"
// import { red } from '@mui/material/colors';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const theme = createTheme();

root.render(
    // <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
    <ThemeProvider theme={theme}>
        <Provider store={store}>
             <App/>
        </Provider>
    </ThemeProvider>
    </GoogleOAuthProvider>
    
    // </React.StrictMode>
    
  );