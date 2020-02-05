import React, { Component } from "react";
import TaskList from "./TasksList";

class TodoList extends Component {
  render() {
    return (
      <div id="root">
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <TaskList />
        </main>
      </div>
    );
  }
}

export default TodoList;
