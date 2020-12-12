import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "./actions";

class TodoItem extends Component {
  handleCheckBox = () => {
    this.props.dispatchToggleTodo(this.props.itemId);
  };

  deleteItem = () => {
    this.props.dispatchDeleteTodo(this.props.itemId);
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

const mapDispatchToProps = (dispatch) => ({
  dispatchToggleTodo: (id) => dispatch(toggleTodo(id)),
  dispatchDeleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
