import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";

import "./task.css";

// eslint-disable-next-line react/prefer-stateless-function
export default class Task extends Component {
   static propTypes = {
    onToggleDone: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired, 
    description: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    createdDate: PropTypes.instanceOf(Date).isRequired
  };

  render() {
    const { description, onDeleted, onToggleDone, isDone, createdDate} = this.props;

    let className = "task-label";
    if (isDone) {
      className += " done";
    };

    return (
      <div className={className}>
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description"  onClick={onToggleDone}  aria-hidden="true">
            {" "}
            {description}{" "}
          </span>
          <span className="created">
            {formatDistanceToNow(createdDate)}
          </span>
        </label>
        <button type = "button"  aria-label= "icon" className="icon icon-edit"/>
        <button  type = "button" aria-label= "icon" className="icon icon-destroy" onClick={onDeleted} />
      </div>
    );
  };
};

