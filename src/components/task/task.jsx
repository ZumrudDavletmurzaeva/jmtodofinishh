/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import React, { Component } from "react";
import PropTypes from "prop-types";
import {formatDistanceToNow} from "date-fns";

import "./task.css";


export default class Task extends Component {

state ={
// eslint-disable-next-line react/prop-types
seconds: this.props.seconds
}

  // eslint-disable-next-line react/sort-comp
  formatTime = (sec) => {
    return [Math.floor(sec / 60 / 60), Math.floor((sec / 60) % 60), Math.floor(sec % 60)]
      .join(':')
      .replace(/\b(\d)\b/g, '0$1');
  };

  startTimer = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
  };


  stopTimer = () => {
    clearInterval(this.timerID);
  };

  tick = () => {
   
    const  { seconds } = this.state;
    if(seconds !== 0) {

      this.setState({seconds: seconds-1}) 

    } else {
      clearInterval(this.timerID);
    }
  
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { description, onDeleted, onToggleDone, isDone, createdDate, id} = this.props;
    
    const {seconds} = this.state


    let className = "task-label";
    if (isDone) {
      className += " done";
    };

    return (
      <div className={className} >
        <input className="toggle" type="checkbox"  onClick={onToggleDone} checked={isDone}   />
        <label>
          <span className="description"  aria-hidden="true">
            {" "}
            {description}{" "}
          </span>
          <span className="timer">
       
            <button aria-label="play" onClick={this.startTimer} type="button"    className="icon icon-play" />
            <button type="button" onClick={this.stopTimer} aria-label="pause" className="icon icon-pause" />
            {this.formatTime(seconds)}
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


}



Task.defaultProps = {
  description: '',
  isDone: false,
  
  createdDate: new Date(),
};

Task.propTypes = {
  onToggleDone: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired, 
    description: PropTypes.string,
    isDone: PropTypes.bool,
    createdDate: PropTypes.instanceOf(Date),
    id: PropTypes.number.isRequired,
   
   
}