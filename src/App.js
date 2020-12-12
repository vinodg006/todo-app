import React, { Component } from "react";
import todosList from "./todos.json";
import TodoList from "./TodoList";
import { Link } from "react-router-dom";

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

  filteredTodos = (path) => {
    switch (path) {
      case "/":
        return this.state.todos;
      case "/active":
        return this.state.todos.filter((todo) => !todo.completed);
      case "/completed":
        return this.state.todos.filter((todo) => todo.completed);
      default:
        return this.state.todos;
    }
  };

  render() {
    const currentPath = this.props.location.pathname;
    const todos = this.filteredTodos(currentPath);
    const itemsLeft = this.filteredTodos("/active").length;

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
          todos={todos}
          toggleCheckBox={this.toggleCheckBox}
          handleDelete={this.handleDelete}
        />
        <footer className="footer">
          <span className="todo-count">
            <strong>{itemsLeft}</strong> item(s) left
          </span>
          <ul className="filters">
            <li>
              <Link to="/" className={currentPath === "/" ? "selected" : ""}>
                All
              </Link>
            </li>
            <li>
              <Link
                to="/active"
                className={currentPath === "/active" ? "selected" : ""}
              >
                Active
              </Link>
            </li>
            <li>
              <Link
                to="/completed"
                className={currentPath === "/completed" ? "selected" : ""}
              >
                Completed
              </Link>
            </li>
          </ul>
          <button className="clear-completed" onClick={this.clearCompleted}>
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

export default App;
