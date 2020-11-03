import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";
import ToDoView from "./components/ToDoView";

export default class App extends Component {
  state = {
    toDoList: [
      {
        id: uuidv4(),
        todo: "Create an app"
      },

      {
        id: uuidv4(),
        todo: "Test the app"
      },

      {
        id: uuidv4(),
        todo: "Publish the app"
      }
    ],

  };

  render() {
    const { toDoList } = this.state;

    return (
      <ToDoView
        toDoList = {toDoList}
      />
    )
  }
}

