import * as actionTypes from './actionType'
import axios from 'axios';

//const timeTakingApi = `http://slowwly.robertomurray.co.uk/delay/1000/url/http://api.stackexchange.com/2.2/questions?site=stackoverflow`;
const timeTakingApi = `http://slowwly.robertomurray.co.uk/delay/2000/url/http://api.stackexchange.com/2.2/questions`;

export const toggleSpinner = (showSpinner) => {
    return {
        type: actionTypes.TOGGLE_SPINNER,
        showSpinner: showSpinner
    }
}


export const addTask = (taskPayload) => {
    return {
        type: actionTypes.ADD_TASK,
        payload: taskPayload
    };
};

// async action is possible here because of thunk, since its a middleware, 
// it blocks the action for sometime until other async task is executed 
// and then dispatches our action
export const addTaskAsync = (taskPayload) => {
    return dispatch => {
        dispatch(toggleSpinner(true));
        axios.get(timeTakingApi)
            .then(response => {
                dispatch(addTask(taskPayload));
            })
            .catch(error => {
                dispatch(toggleSpinner(false));
                dispatch(addTask(taskPayload));
                //console.log("failed to get response from server {}", error);
            });
    }
}

export const deleteTask = (taskPayload) => {
    return {
        type: actionTypes.DELETE_TASK,
        deleteId: taskPayload
    }
}


// async action is possible here because of thunk, since its a middleware, 
// it blocks the action for sometime until other async task is executed 
// and then dispatches our action
export const deleteTaskAsync = (taskPayload) => {
    return dispatch => {
        dispatch(toggleSpinner(true));
        axios.get(timeTakingApi)
            .then(response => {
                console.log(response);
                dispatch(toggleSpinner(false));
                dispatch(deleteTask(taskPayload));
            })
            .catch(error => {
                dispatch(toggleSpinner(false));
                dispatch(deleteTask(taskPayload));
                console.log("failed to get response from server {}", error);
            });
    }
}

export const changeStatus = (taskId) => {
    return {
        type: actionTypes.CHANGE_TASK_STATUS,
        stautsChangeId: taskId
    };
}