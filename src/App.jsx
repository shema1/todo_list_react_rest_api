import React, { Component } from "react";
import TodoList from "./TodoList";

class App extends Component {
  state = {
    isOpen: false
  };

  render() {
    return (
      <TodoList/>
    );
  }
}

export default App;
