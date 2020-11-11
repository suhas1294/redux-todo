import styles from './App.module.css';
import React, {Component} from 'react';
import TaskList from './../Components/TaskList';
import {v4 as uuidv4} from 'uuid'

class App extends Component {
  state = {
    inputText: "",
    tasks: []
  }

  genRandomDate = () => {
    let randNo = Math.floor(Math.random() * 10);
    let futureDate = new Date().getDate() + randNo;
    let formatedDate = futureDate + '-' + new Date().getMonth() + '-' + new Date().getFullYear() ;
    return formatedDate;
  }

  addBtnHandler = () => {
    let newTask = {
      id: uuidv4(),
      task: this.state.inputText,
      endDate: this.genRandomDate(),
      status: false
    };
    let allTasks = [...this.state.tasks, newTask];
    this.setState({tasks: allTasks, inputText: ""});
  }

  inputChangeHandler = (event) => {
    this.setState({inputText: event.target.value});
  }

  statusChangeHandler = (id) => {
    let tempTasks = [];
    this.state.tasks.forEach(task => {
      if (task.id !== id) {
        tempTasks.push(task);
      }else{
        let updatedTask = {...task, status: !task.status};
        tempTasks.push(updatedTask);
      }
    });
    this.setState({tasks: tempTasks});
  }

  deleteTaskHandler = (id) => {
    let newTasks = this.state.tasks.filter(task => task.id != id );
    this.setState({tasks: newTasks});
  }

  render(){
    return (
      <div className={styles.App}>
        <div className={styles.FieldContainer}>
          <input onChange={(event) => this.inputChangeHandler(event)} id="userinput" style={{padding: '1rem', width: '70%'}} placeholder="start adding tasks" value={this.state.inputText}/>
          <button id={styles.PlusBtn} onClick={this.addBtnHandler} >+</button>
        </div>
        { this.state.tasks.length > 0 ? <TaskList StatusChangeClicked={this.statusChangeHandler} tasks={this.state.tasks} deleteTask={this.deleteTaskHandler} /> : (<p>Start adding the tasks...</p>)}        
      </div>
    );
  }
}

export default App;
