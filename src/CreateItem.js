import React, { Component } from "react";
import todoItems from "./App";

class CreateItem extends React.Component {
    handleCreate(e) {
      e.preventDefault();
      
      if (!this.refs.newItemInput.value) {
        alert('Please enter a task name.');
        return;
      } else if (this.props.toDoItems.map(element => element.name).indexOf(this.refs.newItemInput.value) != -1) {
        alert('This task already exists.');
        this.refs.newItemInput.value = '';
        return;
      }
      
      this.props.createItem(this.refs.newItemInput.value);
      this.refs.newItemInput.value = '';
    }
    
    render() {
      return (
        <div className="create-new">
          <form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="Create Task" ref="newItemInput" />
            <button><i class="fa fa-plus" aria-hidden="true"></i></button>
          </form>
        </div>
      );
    }
  }
  export default CreateItem;