import * as actionTypes from './../actions/actionType';

const initialState = {
    tasks: [],
};

// reducer always spits out upadted state
const reducer = ( state=initialState, action ) => {
    switch(action.type) {
        case actionTypes.ADD_TASK: return addTask(state, action.payload);
        case actionTypes.DELETE_TASK: return deleteTask(state, action.deleteId);
        case actionTypes.CHANGE_TASK_STATUS: return changeStatus(state, action.stautsChangeId);
        default: return state;
    }
};

const addTask = (state, payload) => {
    let allTasks = [...state.tasks, payload];
    let updatedState = {tasks: allTasks};
    return updatedState;
}

const deleteTask = (state, id) => {
    let taskListAfterDeletion = state.tasks.filter(task => task.id != id );
    let updatedState = {tasks: taskListAfterDeletion};
    return updatedState;
}

const changeStatus = (state, id) => {
    let tempTasks = [];
    state.tasks.forEach(task => {
      if (task.id !== id) {
        tempTasks.push(task);
      }else{
        let updatedTask = {...task, status: !task.status};
        tempTasks.push(updatedTask);
      }
    });
    return({tasks: tempTasks});
}

export default reducer;