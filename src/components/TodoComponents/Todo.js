import React from "react";

const Todo = props => {
    return (
    <div className={props.item.completed ? "completed" : null}
    onClick={() => props.toggleItem(props.item.id)}>
        {props.item.name}
        </div>
    );
};

export default Todo;