import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "../styles/TodoList.css";

class TodoList extends Component {
  state = {};
  render() {
    const { items, handleClearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-4">
        <h3 className="text-capitalize text-center">the list</h3>

        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

        <div className="clear-button">
          <button
            type="button"
            className="btn btn-danger text-capitalize mt-5"
            onClick={handleClearList}
          >
            clear list
          </button>
        </div>
      </ul>
    );
  }
}

export default TodoList;
