import React, { Component } from "react";
import TodoItem from "./TodoItem";

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
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
