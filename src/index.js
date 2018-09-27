import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./components/App";
import reducer from "./reducer/index";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from "./pages/home";
import More from "./pages/more-about-me";


import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
);

render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("root")
);
