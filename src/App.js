import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { addTodo, clearCompletedTodos } from "./actions";

class App extends Component {
  state = {
    inputValue: "",
  };

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleInputKeyUp = (e) => {
    if (e.keyCode === 13 && this.state.inputValue !== "") {
      this.props.dispatchAddTodo(this.state.inputValue);
      this.setState({ inputValue: "" });
    }
  };

  filteredTodos = (path) => {
    switch (path) {
      case "/":
        return this.props.todos;
      case "/active":
        return this.props.todos.filter((todo) => !todo.completed);
      case "/completed":
        return this.props.todos.filter((todo) => todo.completed);
      default:
        return this.props.todos;
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
        <TodoList todos={todos} />
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
          <button
            className="clear-completed"
            onClick={this.props.dispatchClearCompletedTodos}
          >
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddTodo: (item) => dispatch(addTodo(item)),
  dispatchClearCompletedTodos: () => dispatch(clearCompletedTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
