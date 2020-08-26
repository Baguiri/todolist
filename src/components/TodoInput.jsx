import React, { Component } from "react";
import "../styles/TodoInput.css";

class TodoInput extends Component {
  state = {};
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <div className="add-button">
            <button
              type="submit"
              className={
                editItem ? "btn  btn-success mt-3" : "btn btn-primary mt-3"
              }
            >
              {editItem ? "Edit item" : "Add item"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoInput;
