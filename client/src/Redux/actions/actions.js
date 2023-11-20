import {
    LOGIN_REQUEST,
    LOGOUT,
    REGISTRATION,
    SAVE_DONE_TASK_TO_STORE, SAVE_LATE_TASK_TO_STORE,
    SAVE_TASK_TO_STORE_SUCCESS
} from "../constants.js";


export const saveTaskToStoreSuccess = (response) => ({
    type: SAVE_TASK_TO_STORE_SUCCESS,
    payload: response,
});
export const add_done_task_to_store = (payload) => {
    return {
        type: SAVE_DONE_TASK_TO_STORE,
        payload
    }
}

export const add_late_task_to_store = (payload) => {
    return {
        type: SAVE_LATE_TASK_TO_STORE,
        payload
    }
}

export const registration_in_sys = ({username,lastname,email,age,profession,gender,password,color}) => {
    return {
        type: REGISTRATION,
        payload: {
            username, lastname, email,
            age, profession, gender,
            password, color,
        }
    }
}
export const logInRequest = (username, password) => {
    return{
        type: LOGIN_REQUEST,
        payload: {username, password}
    }
}
export const log_out_in_sys = () => {
    return {
        type: LOGOUT
    }
}



