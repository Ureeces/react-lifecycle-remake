import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";
import ToDoView from "./components/ToDoView";

import "./App.css";

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
    toDoValue: "",
    showErrorMessage: false,
    showNoToDosMessage: false

  };

  handleInputChange = (event) => {
    // Shows us what value is tied to the input
    // As it shows, each value is a single character, so for the future, we will need an array
    // console.log(event.target.name, event.target.value);

    // This turns of the error message if it has been toggled due to, well, an error
    if(this.state.showErrorMessage) {
      this.setState({
        showErrorMessage: false
      });
    }

    // This basically creates the array of target values
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAddToDo = (event) => {
    event.preventDefault();
    // console.log("You clicked the Add Button!")

    // Check for empty todo
    if(this.state.toDoValue.length === 0) {
      this.setState({
        showErrorMessage: true
      });

      return;
    }

    let newTodo = {
      id: uuidv4(),
      todo: this.state.toDoValue
    };

    let updatedToDoList = [...this.state.toDoList, newTodo];

    this.setState({
      toDoList: updatedToDoList,
      toDoValue: "",
      showNoToDosMessage: false
    });

    console.log("Added new Todo:", newTodo.todo);
  };

  appHandleDeleteToDo = (targetID) => {
    console.log(targetID);

    let toDoListTrimmed = this.state.toDoList.filter(({ id }) => {
      return id !== targetID;
    });

    this.setState({
      toDoList: toDoListTrimmed
    }, () => {
      if(toDoListTrimmed.length === 0) {
        this.setState({
          showNoToDosMessage: true
        });
      }
    });
  };

  render() {
    const { toDoList, showErrorMessage, showNoToDosMessage } = this.state;

    return (
      <div>
        {/* Input Error Message Check */}
        {showErrorMessage ? (
          <div className="input-error">Please Enter a Todo!</div>
        ) : null}

        {/* Todo Input */}
        <input 
          onChange={this.handleInputChange}
          type="text"
          name="toDoValue"
          value = {this.state.toDoValue}
        />{" "}
        <button onClick={this.handleAddToDo}>Add</button>

        {/* This will only display if there are no todos left */}
        {showNoToDosMessage ? (
          <div className="input-error">Please Add Something To Do!</div>
        ) : (
        
        /* To Do View */
        <ToDoView
          toDoList = {toDoList}
          appHandleDeleteToDo = {this.appHandleDeleteToDo}
        />

        )}
      </div>
    );
  }
}

