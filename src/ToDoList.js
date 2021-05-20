import React, { Component } from "react";
import ToDoListItem from "./ToDoListItem";

class ToDoList extends React.Component {
    renderItems() {
      return this.props.toDoItems.slice(0,10).map((item, index) => <ToDoListItem key={index} {...item} {...this.props} />);
    }

    render() {
      return (
        <div className="items-list">
          {this.renderItems()}
        
        </div>
      );
    }
  }

  export default ToDoList;