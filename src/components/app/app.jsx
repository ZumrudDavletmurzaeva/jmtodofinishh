import React, { Component } from "react";
import TaskList from "../taskList";
import NewTaskForm from "../newTaskForm";
import Footer from "../footer";
import "./app.css";

export default class App extends Component {
  maxId = 100;



  state = {
    todoData: [
      this.createTodoItem("Completed task"),
      this.createTodoItem("Editing task"),
      this.createTodoItem("Active task"),
    ],
    filter: "",
  };



  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, ...after];
      //  возвращаем новый массив без элемента idx
      return {
        todoData: newArray,
      };
    });
  };

  
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      // обновление объекта
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, isDone: !oldItem.isDone };

      
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, newItem, ...after];
      return {
        todoData: newArray,
      };
    });
  };



  addItem = (text) => {
    // генерируем id (в реальном проекте id генерируется сервером)
    const newItem = this.createTodoItem(text);
    // добавление созданного нами выше объекта в массив
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };


  onFilterChange = (filter) => {
    this.setState({ filter });
  };

 

  onClearCompleted = () => {
    this.setState(({ todoData }) => {
      const activeTasks = todoData.filter((item) => !item.isDone);

      this.setState({
        todoData: activeTasks,
      });
    });
  };



 
  createTodoItem(description, isDone = false, isEditing = false, id = this.maxId++, createdDate = new Date()) {
    return {
      description,
      isDone,
      isEditing,
      id, 
      createdDate
    };
  };

 

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.isDone);
      case "completed":
        return items.filter((item) => item.isDone);
      default:
        return items;
    };
  };



  render() {
    const { todoData, filter } = this.state;
    const newArrItems = this.filter(todoData, filter);
    const doneCount = todoData.filter((el) => el.isDone).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm onItemAdded={this.addItem} />
          </header>
          <section className="main">
            <TaskList
              todos={newArrItems}
              onDeleted={this.deleteItem}
              onToggleDone={this.onToggleDone}
              filterType={filter}
            />
            <Footer
              todocount={todoCount}
              onClearCompleted={this.onClearCompleted}
              filter={filter}
              onFilterChange={this.onFilterChange}
            />
          </section>
        </section>
      </div>
    );
  };
};
