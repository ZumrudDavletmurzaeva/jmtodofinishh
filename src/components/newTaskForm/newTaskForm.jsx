import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./newTaskForm.css";

export default class NewTaskForm extends Component {

  static propTypes = {
    onItemAdded: PropTypes.func.isRequired
  };
  
  state = {
    description: "",
    min:'',
    sec:''
  };

  onLabelChange = (event, property) => {
    this.setState({
       [property]: event.target.value,
     
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const {onItemAdded} = this.props
    const {description, min, sec} = this.state
    if (description.trim() === '') return;
    onItemAdded(description, min, sec)
    this.setState({
      description: "",
      min:'',
      sec: '',
    });
  };

  render() {
    const {description, min, sec} = this.state
    const searchText = "What needs to be done?";
    return (
      <form onSubmit={this.onSubmit} className="new-todo-form">
        <input
          className="new-todo"
          placeholder={searchText}
          onChange={(event) => this.onLabelChange(event, 'description')}
          value={description}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          value={min}
          onChange={(event) => this.onLabelChange(event, 'min')}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          value={sec}
          onChange={(event) => this.onLabelChange (event, 'sec')}
        />
             <input type="submit" className="submit-button" />
      </form>
    );
  }
}


