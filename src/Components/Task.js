import React from 'react';
import styles from './Tasks.module.css'

const task = (props) => {
    let cardStyle = [styles.TaskCard];
    props.status ? cardStyle.push(styles.TaskComplete) : cardStyle.push(styles.TaskIncomplete);
    return(
        <div className={cardStyle.join(' ')}>
            <h3>{props.task}</h3>
            <strong>End Date:</strong> <p>{props.endDate}</p>
            <div>
                <button onClick={() => props.StatusChangeClicked(props.id)}> {props.status ? 'Mark as Redo' : 'Mark as Done'} </button>
                <button onClick={() => props.deleteTask(props.id)}> Delete </button>
            </div>
        </div>
    );
}

export default task;