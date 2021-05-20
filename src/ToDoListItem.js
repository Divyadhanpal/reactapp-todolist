import React, { Component } from "react";
 


class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      editing: false
    };
  }
  
  renderName() {
    let currentFilter = this.props.filter;
    // const itemStyle = {
    //   'text-decoration': this.props.completed ? 'line-through' : 'none',
    //   cursor: 'pointer'
    // };
    
    if(this.state.editing) {
      return (
          <form  className="name" onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" ref="editInput" defaultValue={this.props.title} />
          </form>
      );
    }
    if (currentFilter === "all") {        
      return(<span className="name">
        <li  style={this.props.completed ? {textDecoration: 'line-through', cursor: 'pointer'} : {} } onClick={() => {this.props.toggleComplete(this.props.title)}}>{this.props.title}</li>               
      </span>);
    } else if (currentFilter === "nc") {        
      if(!this.props.completed){
        return(<span className="name">
          <li  style={this.props.completed ? {textDecoration: 'none'} : {} } onClick={() => {this.props.toggleComplete(this.props.title)}}>{this.props.title}</li>     
        </span>);
      }        
    } else {
        if(this.props.completed){
          return(<span className="name">
            <li  style={this.props.completed ? {textDecoration: 'line-through'} : {} } onClick={() => {this.props.toggleComplete(this.props.title)}}>{this.props.title}</li>           
          </span>);
        }         
    }
    // return (
    //   <span style={itemStyle} onClick={this.props.toggleComplete.bind(this, this.props.title)}>{this.props.title}</span>
    // );
  }
  
  renderButtons() {
    let currentFilter = this.props.filter;
    if (currentFilter === "all") {        
      if (this.state.editing) {
        return (
          <span  className="actions">
            <button onClick={this.onSaveClick.bind(this)}>Save</button>
            <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
          </span>
        );
      }
      
      return (
        <span  className="actions">
          <button class="btn" onClick={this.onEditClick.bind(this)}><i class='fa fa-edit' ></i></button>
          <button class="btn" onClick={this.props.deleteItem.bind(this, this.props.title)}><i class="fa fa-trash"></i></button>
        </span>
      );
    } else if (currentFilter === "nc") {        
      if(!this.props.completed){
        if (this.state.editing) {
          return (
            <span  className="actions">
              <button onClick={this.onSaveClick.bind(this)}>Save</button>
              <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
            </span>
          );
        }
        
        return (
          <span  className="actions">
            <button class="btn" onClick={this.onEditClick.bind(this)}><i class='fa fa-edit' ></i></button>
            <button class="btn" onClick={this.props.deleteItem.bind(this, this.props.title)}><i class="fa fa-trash"></i></button>
          </span>
        );
      }        
    } else {
        if(this.props.completed){
          if (this.state.editing) {
            return (
              <span  className="actions">
                <button onClick={this.onSaveClick.bind(this)}>Save</button>
                <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
              </span>
            );
          }
          
          return (
            <span  className="actions">
              <button class="btn" onClick={this.onEditClick.bind(this)}><i class='fa fa-edit' ></i></button>
              <button class="btn" onClick={this.props.deleteItem.bind(this, this.props.title)}><i class="fa fa-trash"></i></button>
            </span>
          );
        }         
    }
   
  }
  
  onEditClick() {
    this.setState({ editing: true });
  }
  
  onCancelClick() {
    this.setState({ editing: false });
  }
  
  onSaveClick(e) {
    e.preventDefault();
    this.props.saveItem(this.props.title, this.refs.editInput.value);
    this.setState({ editing: false });
  }
  
  render() {
    return (
      <div >
       
        {this.renderName()}
       
        {this.renderButtons()}
       
      </div>
    );
  }
}

export default ToDoListItem;