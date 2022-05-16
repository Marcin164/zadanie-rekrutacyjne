import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga"
import reducers from "./reducers"
import { watcherSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(watcherSaga)