import React, { Component } from "react";
import logo from './logo.svg';
import './TodoList.css';
import CreateItem from "./CreateItem";
import ToDoList from "./ToDoList";
import ListFilters from "./ListFilters";
import axios from "axios";
import {useEffect} from "react";
 
class App extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        toDoItems:[],
        filter: 'all' 
      };
    }

    async componentDidMount(){
      let result = await axios.get("https://jsonplaceholder.typicode.com/todos");
      this.setState({toDoItems:result.data})
    }

    changeViewByFilter=(newFilter)=>{
      this.setState({
        filter: newFilter
      });
    }
    
    createItem=(item) =>{
      this.state.toDoItems.unshift({
        title: item,
        completed: false
      });
      this.setState({
        toDoItems: this.state.toDoItems
      });
    }
    
    findItem=(item) =>{
      return this.state.toDoItems.filter((element) => element.title === item)[0];
    }
    
    toggleComplete=(item) =>{
      let selectedItem = this.findItem(item);
      selectedItem.completed = !selectedItem.completed;
      this.setState({ toDoItems: this.state.toDoItems });
    }
     handleFilter = (item) => {
      let filtered = this.state.toDoItems.filter(item => {
        return !item.complete;
      });
      this.setState({ toDoItems: filtered });
    }
    
    saveItem=(oldItem, newItem)=> {
      let selectedItem = this.findItem(oldItem);
      selectedItem.title = newItem;
      this.setState({ toDoItems: this.state.toDoItems });
    }
    
    deleteItem=(item) =>{
      let index = this.state.toDoItems.map(element => element.title).indexOf(item);
      this.state.toDoItems.splice(index, 1);
      this.setState({ toDoItems: this.state.toDoItems });
    }
    
    render() {
      return (
        <div className="to-do-app">
          <div className="header">
            <h1>Task List</h1>
          </div>
          <CreateItem toDoItems={this.state.toDoItems} createItem={this.createItem} />
          <ToDoList toDoItems={this.state.toDoItems} deleteItem={this.deleteItem} saveItem={this.saveItem} toggleComplete={this.toggleComplete} filter={this.state.filter} />
        <ListFilters filter={this.state.filter} changeView={this.changeViewByFilter}/>
        </div>
      );
    }
  }
 
export default App;
