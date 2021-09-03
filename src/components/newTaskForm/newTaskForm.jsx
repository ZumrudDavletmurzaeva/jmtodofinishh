import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./newTaskForm.css";

export default class NewTaskForm extends Component {

  static propTypes = {
    onItemAdded: PropTypes.func.isRequired
  };
  
  state = {
    description: "",
  };

  onLabelChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const {onItemAdded} = this.props
    const {description} = this.state
    if (description.trim() === '') return;
    onItemAdded(description)
    this.setState({
      description: "",
    });
  };

  render() {
    const {description} = this.state
    const searchText = "What needs to be done?";
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder={searchText}
          onChange={this.onLabelChange}
          value={description}
        />
      </form>
    );
  }
}


