import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { sagaWotcher } from "./sagas";

import rootReducer from "./redusers";
const saga = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(sagaWotcher);

export default store;
