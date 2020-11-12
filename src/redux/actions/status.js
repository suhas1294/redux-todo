import * as actionTypes from './actionType';

export const changeStatus = (taskId, tasks) => {
    return {
        type: actionTypes.CHANGE_TASK_STATUS,
        payload: {id: taskId, tasks: tasks}
    };
}