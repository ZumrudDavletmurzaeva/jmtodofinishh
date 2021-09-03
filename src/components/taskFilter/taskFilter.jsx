import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./taskFilter.css";

export default class TaskFilter extends Component {
  static propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    
  };

  buttons = [
    { name: "all", description: "All" },
    { name: "active", description: "Active" },
    { name: "completed", description: "Completed" },
  ];

  render() {
    const { onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, description }) => (
      <button
        type="button"
        className="selected"
        key={name}
        onClick={() => onFilterChange(name)}
      >
        {description}
      </button>
    ));
    return (
      <ul className="filters">
        <li>{buttons}</li>
      </ul>
    );
  };
};

