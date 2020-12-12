import React, { Component } from "react";
import todosList from "./todos.json";

var itemCounter = 6;
class App extends Component {
  state = {
    todos: todosList,
    inputValue: "",
  };

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleInputKeyUp = (e) => {
    if (e.keyCode === 13 && this.state.inputValue !== "") {
      const newItem = {
        id: itemCounter++,
        title: this.state.inputValue,
        completed: false,
      };
      this.setState({ todos: [...this.state.todos, newItem], inputValue: "" });
    }
  };

  toggleCheckBox = (id) => {
    const updatedTodo = this.state.todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({ todos: updatedTodo });
  };

  handleDelete = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return !todo.completed;
        }),
      ],
    });
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={this.state.inputValue}
            type="text"
            autoFocus
            onChange={this.handleInputChange}
            onKeyUp={this.handleInputKeyUp}
          />
        </header>
        <TodoList
          todos={this.state.todos}
          toggleCheckBox={this.toggleCheckBox}
          handleDelete={this.handleDelete}
        />
        <footer className="footer">
          <span className="todo-count">
            <strong>{this.state.todos.length}</strong> item(s) left
          </span>
          <button className="clear-completed" onClick={this.clearCompleted}>
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

class TodoItem extends Component {
  handleCheckBox = () => {
    this.props.toggleCheckBox(this.props.itemId);
  };

  deleteItem = () => {
    this.props.handleDelete(this.props.itemId);
  };

  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onChange={this.handleCheckBox}
          />
          <label>{this.props.title}</label>
          <button className="destroy" onClick={this.deleteItem} />
        </div>
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map((todo, index) => (
            <TodoItem
              title={todo.title}
              completed={todo.completed}
              key={index}
              itemId={todo.id}
              toggleCheckBox={this.props.toggleCheckBox}
              handleDelete={this.props.handleDelete}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default App;
