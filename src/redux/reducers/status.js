import * as actionTypes from './../actions/actionType';

// this is not being used
const initialState = {
    tasks: [],
};

// reducer always spits out upadted state
const reducer = ( state=initialState, action ) => {
    switch(action.type) {
        case actionTypes.CHANGE_TASK_STATUS: return changeStatus(action.payload);
        default: return state;
    };
};

const changeStatus = (payload) => {
    let tempTasks = [];
    payload.tasks.forEach(task => {
      if (task.id !== payload.id) {
        tempTasks.push(task);
      }else{
        let updatedTask = {...task, status: !task.status};
        tempTasks.push(updatedTask);
      }
    });
    return({tasks: tempTasks});
}

export default reducer;