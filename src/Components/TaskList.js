import React from 'react';
import Task from './Task';

const taskList = (props) => {
    return props.tasks.map(task => {
        return (<Task 
            task={task.task} 
            endDate={task.endDate} 
            status={task.status} 
            key={task.id}
            id={task.id}
            StatusChangeClicked={props.StatusChangeClicked}
            deleteTask={props.deleteTask} />);
    });
}

export default taskList;