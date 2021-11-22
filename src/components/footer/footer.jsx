import React from "react";
import PropTypes from "prop-types";
import TaskFilter from "../taskFilter/taskFilter";

import "./footer.css";

const Footer = ({todocount, filter, onFilterChange, onClearCompleted}) => (
  <footer className="footer">
    <span className="todo-count">{todocount} items left</span>
    <TaskFilter filter={filter} onFilterChange={onFilterChange} />
    <button type= "button"className="clear-completed" onClick={onClearCompleted}>
      {" "}Clear completed</button>
  </footer>
);


Footer.propTypes = {
  todocount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired, 
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export default Footer;
