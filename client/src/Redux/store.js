import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga"
import reducers from "./reducers"
import completeSaga from "./sagas/devices"

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(completeSaga)