import  React  from 'react';
import  ReactDOM  from 'react-dom/client';
import { Provider } from 'react-redux';
import {  applyMiddleware, compose, createStore} from 'redux';
// import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducers from './reducers'

import  App  from './App';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers, compose(applyMiddleware(thunk)));

root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    // </React.StrictMode>
  );