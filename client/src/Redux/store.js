import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import reducers from "./reducers/index.js";
import rootSaga from "./saga/index.js";




const sagaMiddleware = createSagaMiddleware();

const configureStore = preloadedState => createStore(
    reducers,
    preloadedState,
    applyMiddleware(sagaMiddleware)
);

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;