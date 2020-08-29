import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { smurfReducer } from './reducers/reducers';
import thunk from "redux-thunk"
import logger from "redux-logger";


const store = createStore ( smurfReducer , applyMiddleware(thunk))

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);