import React, { Component } from "react";


class ListFilters extends React.Component {
    constructor(props){
        super();
      }
      render(){
        let currentFilter = this.props.filter;
        return(
          <div className="filters">
            <button className={
                (currentFilter === "all") ? "active" : "in-active"
              } onClick={() => this.props.changeView("all")}>All </button>
            <button className={
                (currentFilter === "co") ? "active" : "in-active"
              } onClick={() => this.props.changeView("co")}>Completed</button>
            <button className={
                (currentFilter === "nc") ? "active" : "in-active"
              } onClick={() => this.props.changeView("nc")}>Not Completed</button>
          </div>
        );       
      }
  }

  export default ListFilters;