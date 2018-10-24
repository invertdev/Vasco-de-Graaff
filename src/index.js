import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./components/App";
import reducer from "./reducer/index";

import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from "react-redux";
import { applyMiddleware, createStore , compose} from "redux";
import logger from "redux-logger";


const store = createStore(
  reducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger)
  )
);

render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("root")
);
