import React from "react";
import PortfolioNav from "./PortfolioNav";
import PortfolioFooter from "./PortfolioFooter";
import {browserHistory} from "react-router";
import $ from 'jquery';

    
var ProjectDeletePage = React.createClass({
    getInitialState: function() {
        return ({
            auth: false,
            id: ''
        });
    },
    
    getUser: function() {
        $.ajax({
            url: '/api/me',
            dataType: 'json',
            cache: false,
            success: function(data) {
              this.setState({
                  auth: true
                });
            }.bind(this),
            error: function(xhr, status, err) {
              console.error('/api/me', status, err.toString());
            }.bind(this)
        });
    },
    
    handleProjectDelete: function() {
        $.ajax({
            url: '/api/delete/' + this.state.id,
            type: 'DELETE',
          success: function(data) {
              console.log('Project deleted.');
              browserHistory.push('/');
          }.bind(this),
          error: function(xhr, status, err) {
              console.error('/api/delete/' + this.state.id, status, err.toString());
            }.bind(this)
        });
    },
    
    handleIDInput: function(e) {
        this.setState({id: e.target.value});
    },
    
    componentDidMount: function() {
        this.getUser();
    },
    
    render: function() {
        let form = (
            <form className="container formBody">
              <div className="form-group">
                <label htmlFor="projectInputID">Project ID</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="projectInputID" 
                  placeholder="Project ID" 
                  name="title" 
                  value={this.state.id} 
                  onChange={this.handleIDInput}/>
              </div>
              <span  className="btn btn-danger" onClick={this.handleProjectDelete}>Submit</span>
            </form>    
        );
        let unlogged = (<h3 className="formBody text-center">You must be logged in to delete a Project</h3>);
        let show = this.state.auth ? form : unlogged;
        return (
            <div>{show}</div>
        );
    }    
});

module.exports = ProjectDeletePage;