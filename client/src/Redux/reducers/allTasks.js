import {
    SAVE_DONE_TASK_TO_STORE,
    SAVE_LATE_TASK_TO_STORE,
    SAVE_TASK_TO_STORE_SUCCESS
} from "../constants.js";

const initialState = {
    tasks: [],
    doneTasks: [],
    lateTasks: []
};

const allTasks = (state = initialState, { type , payload}) => {
    switch (type) {
        case SAVE_TASK_TO_STORE_SUCCESS:
            return{
                ...state,
                tasks: [state.tasks, ...payload]
            }
        case SAVE_DONE_TASK_TO_STORE:
            return{
                ...state,
                doneTasks: [...state.doneTasks, ...payload]
            }
        case SAVE_LATE_TASK_TO_STORE:
            return{
                ...state,
                lateTasks: [...state.lateTasks, ...payload]
            }
        default:
            return state;
    }
};

export default allTasks;
