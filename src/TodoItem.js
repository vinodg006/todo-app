import React, { Component } from "react";

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

export default TodoItem;
