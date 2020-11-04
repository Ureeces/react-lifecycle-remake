import React from "react";
import { arrayOf, shape, number, string} from "prop-types";

import "./ToDoView.css";

const ToDoView = (({ toDoList, appHandleDeleteToDo }) => {
    console.log(toDoList);

    const handleDeleteToDo = (id) => {
        console.log('Reached line 10 of ToDoView.js');
        appHandleDeleteToDo(id);
        console.log('You clicked the delete button!');
    }

    return (
        // <p>It works!</p>
        // <ul>
        //     <li>1</li>
        //     <li>2</li>
        //     <li>3</li>
        // </ul>

        <ul>
            {toDoList.map(({ id, todo }) => {
                return (
                    <li key={id}>
                        {todo}{" "}
                        <span className="todo-button todo-edit-button">Edit</span>
                        <span 
                        className="todo-button todo-delete-button" 
                        onClick={() => handleDeleteToDo(id)}
                        >Delete</span>
                    </li>
                )
            })}
        </ul>
    )
})

ToDoView.propTypes = {
    toDoList: arrayOf(
        shape({
            id: string.isRequired,
            todo: string.isRequired,
        })
    ),
};

export default ToDoView;

