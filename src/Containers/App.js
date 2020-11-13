import styles from './App.module.css';
import React, {Component} from 'react';
import TaskList from './../Components/TaskList';
import {v4 as uuidv4} from 'uuid'

import { connect } from 'react-redux';
import * as actions from './../redux/actions/index';

export class App extends Component {
  state = {
    inputText: ""
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
    this.props.onAddingTask(newTask);
    this.setState({inputText: ""});
  }

  inputChangeHandler = (event) => {
    this.setState({inputText: event.target.value});
  }

  render(){
    return (
      <div className={styles.App}>
        <div className={styles.FieldContainer}>
          <input onChange={(event) => this.inputChangeHandler(event)} id="userinput" style={{padding: '1rem', width: '70%'}} placeholder="start adding tasks" value={this.state.inputText}/>
          <button id={styles.PlusBtn} onClick={this.addBtnHandler} >+</button>
        </div>
        { (this.props.tasks && this.props.tasks.length > 0) ? <TaskList StatusChangeClicked={this.props.onStatusChange} tasks={this.props.tasks} deleteTask={this.props.onDeletingTask} /> : (<p>Start adding the tasks...</p>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return{
      tasks: state.tasks,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddingTask: (payload) => dispatch(actions.addTaskAsync(payload)),
    onDeletingTask: (id) => dispatch(actions.deleteTaskAsync(id)),
    onStatusChange: (id) => dispatch(actions.changeStatus(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
