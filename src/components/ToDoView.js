import React from "react";
import { arrayOf, shape, number, string} from "prop-types";

import "./ToDoView.css";

const ToDoView = ((toDoList) => {
    console.log(toDoList);

    return (
        <p>It works!</p>
        // <ul>
        //     {toDoList.map(({ id, todo }) => {
        //         return (
        //             <li key={id}>
        //                 {todo}{" "}
        //             </li>
        //         )
        //     })}
        // </ul>
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

