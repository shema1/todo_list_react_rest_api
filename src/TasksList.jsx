import React, { Component } from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTask
} from "./taskGateway";

const baseUrl =
  "https://5e39d9d88d7e1300149cd70c.mockapi.io/api/v1/to_do_list";

class TaskList extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList =>
      this.setState({
        tasks: tasksList
      })
    );
  };

  onCreate = text => {

    const newTask = {
      text,
      done: false
    };
    console.log(newTask)
    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done
    };
    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  
  handleTaskDelete = id => {
    deleteTask(id).then(() => this.fetchTasks());
  };


  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <>
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TaskList;
