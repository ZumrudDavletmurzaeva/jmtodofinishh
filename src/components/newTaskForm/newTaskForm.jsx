/* eslint-disable react/prop-types */
import React, { useState } from "react";
// import PropTypes from 'prop-types';
import "./newTaskForm.css";

const  NewTaskForm = ({onItemAdded}) => {

  // static propTypes = {
  //   onItemAdded: PropTypes.func.isRequired
  // };
  

  const [description, setDescription] = useState('');

  const [min, setMinutes] = useState('');

  const [sec, setSeconds] = useState('');


  const onLabelChange = (event) => {
 
    setDescription(event.target.value)

  };



  const onSubmit = (event) => {
    event.preventDefault();
    if (description.trim() === '') return;
    onItemAdded(
      description, min, sec)
    setDescription(description);
    setMinutes('');
    setSeconds('');

  };


    
    const searchText = "What needs to be done?";
    return (
      <form onSubmit={onSubmit} className="new-todo-form">
        <input
          className="new-todo"
          placeholder={searchText}
          onChange={onLabelChange}
          value={description}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          value={min}
          onChange={(event) => setMinutes(event.target.value)}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          value={sec}
          onChange={(event) => setSeconds(event.target.value)}
        />
             <input type="submit" className="submit-button" />
      </form>
    );
  }

  export default NewTaskForm;

