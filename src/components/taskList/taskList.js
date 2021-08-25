import React from "react";
import PropTypes from "prop-types";
import Task from "../task/task";
import "./taskList.css";

const TaskList = ({ todos, onDeleted, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id}>
        <Task
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired
  
};

export default TaskList;
