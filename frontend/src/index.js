import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import cookies from "js-cookie";

import { BrowserRouter as Router } from "react-router-dom"
import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension"

import { userLoginR } from './reducers/userReducer';

const rootReducer = combineReducers({
  userLogin: userLoginR,
})

const userInfoFromStorage = cookies.get("user") ? JSON.parse(cookies.get("user")) : null

const initialState = {
  userLogin: {userInfo: userInfoFromStorage},
};
const middleware = [thunk]
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// "homepage": "https://sh-rawan.github.io/Mern-boiler-plate",
