import {call, fork, put, takeLatest} from 'redux-saga/effects';
import {log__Out, logIn} from '../../api/auth/auth.js'; // Import your API function
import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTRATION, SAVE_TASK_TO_STORE} from "../constants.js";
import {saveTasks} from "../../api/task/task.js";
import {saveTaskToStoreSuccess} from "../actions/actions.js";

// export function* workerSaga() {


function* logInToSys(action) {
    try {
        const { username, password } = action.payload;
        const response = yield call(logIn, username, password);
        // Dispatch a success action
        yield put({ type:  LOGIN_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type:  LOGIN_FAILURE, payload: error });
    }
}

function* save_task_to_store(action) {
    try {
        const { userID } = action;
        const response = yield call(saveTasks, userID);
        yield put(saveTaskToStoreSuccess(response));
    } catch (error) {
        console.log(error);
    }
}

function* log_out_to_sys() {
    try {
        yield fork(log__Out);
    } catch (error) {
        console.log(error)
    }
}

function* registration_to_sys() {
    try {
        yield fork(registration_to_sys());
    } catch (error) {
        console.log(error)
    }
}

function* watcherSaga() {
    yield takeLatest( SAVE_TASK_TO_STORE, save_task_to_store);
    yield takeLatest( LOGIN_REQUEST, logInToSys);
    yield takeLatest( LOGOUT, log_out_to_sys);
    yield takeLatest( REGISTRATION, registration_to_sys);
}

export default function* rootSaga() {
    yield watcherSaga();
    console.log('rootSaga is ready');
}
