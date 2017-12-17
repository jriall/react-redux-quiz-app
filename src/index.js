import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import "./style/index.css";
import Root from "./containers/Root";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();
