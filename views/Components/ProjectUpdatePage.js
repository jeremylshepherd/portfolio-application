import React from "react";
import {browserHistory} from "react-router";
import $ from 'jquery';

var ProjectForm = React.createClass({
  
  getInitialState: function() {
    return ({
      title: '',
      description: '',
      url: '',
      repo: '',
      img: '',
      technologies: '',
      type: ''
    });
  },
  
  loadProject: function() {
      $.ajax({
      url: `/api/project/${this.props.params.id}`,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
            title: data.title,
            description: data.description,
            url: data.url,
            repo: data.repo,
            img: data.img,
            technologies: data.technologies.join(', '),
            type: data.type
          });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(`/api/project/${this.props.params.id}`, status, err.toString());
      }.bind(this)
    });
  },
  
  handleTitleInput: function(e) {this.setState({title: e.target.value})},
  
  handleDescriptionInput: function(e) {this.setState({description: e.target.value})},
  
  handleUrlInput: function(e) {this.setState({url: e.target.value})},
  
  handleRepoInput: function(e) {this.setState({repo: e.target.value})},
  
  handleTechInput: function(e) {
    this.setState({technologies: e.target.value});
  },
  
  handleImgInput: function(e) {this.setState({img: e.target.value})},
  
  handleTypeInput: function(e) {this.setState({type: e.target.value})},
  
  
  handleUpdateSubmit: function() {
    let p = {};
    p.title = this.state.title;
    p.description = this.state.description;
    p.url = this.state.url;
    p.img = this.state.img;
    let tech =this.state.technologies.split(',');
    tech = tech.map((t) => {return t.trim();});
    console.log(tech);
    p.technologies = tech;
    p.repo = this.state.repo;
    p.type = this.state.type;
    $.ajax({
      url: `/api/update/${this.props.params.id}`,
      dataType: 'json',
      type: 'POST',
      data: p,
      success: function(data) {
        this.setState({
          title: '',
          description: '',
          url: '',
          repo: '',
          img: '',
          technologies: '',
          type: ''
        });
        browserHistory.push('/');
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(`/api/update/${this.props.params.id}`, status, err.toString());
      }.bind(this)
    });
  },
  
  componentDidMount: function() {
      this.loadProject();
  },
  
  render: function() {
    return (
      <div className="formBody">
        <h3 className="text-center">Update Project Form</h3>
        <form className="container">
          <div className="form-group">
            <label htmlFor="projectInputTitle">Title</label>
            <input 
              type="text" 
              className="form-control" 
              id="projectInputTitle" 
              placeholder="Title" 
              name="title" 
              value={this.state.title} 
              onChange={this.handleTitleInput}/>
          </div>
          <div className="form-group">
            <label htmlFor="projectInputTitle">Description</label>
            <textarea 
              type="text" 
              className="form-control" 
              id="projectInputTitle" 
              placeholder="Description" 
              name="description" 
              value={this.state.description}
              onChange={this.handleDescriptionInput}/>
          </div>
          <div className="form-group">
            <label htmlFor="projectInputURL">Url</label>
            <input 
              type="text" 
              className="form-control" 
              id="projectInputURL" 
              placeholder="Project Url" 
              name="url" 
              value={this.state.url}
              onChange={this.handleUrlInput}/>
          </div>
          <div className="form-group">
            <label htmlFor="projectInputTech">Technologies</label>
            <input 
              type="text" 
              className="form-control" 
              id="projectInputTech" 
              placeholder="Techonologies (Please separate by comma)" 
              name="technologies" 
              value={this.state.technologies}
              onChange={this.handleTechInput}/>
          </div>
          <div className="form-group">
            <label htmlFor="projectInputIMG">Project Image</label>
              <input 
                id="projectInputIMG" 
                type="text" 
                className="form-control" 
                placeholder="IMG URL" 
                name="img" 
                value={this.state.img}
                onChange={this.handleImgInput}/>
          </div>
          <div className="form-group">
            <label htmlFor="projectInputRepo">Github Repository</label>
              <input 
                id="projectInputRepo" 
                type="text" 
                className="form-control" 
                placeholder="Github Repository" 
                name="repo" 
                value={this.state.repo}
                onChange={this.handleRepoInput}/>
          </div>
          <div className="form-group">
            <label htmlFor="projectInputType">Project Type</label>
              <input 
                id="projectInputType" 
                type="text" 
                className="form-control" 
                placeholder="Front-End, Back-end, Full-stack" 
                name="type" 
                value={this.state.type}
                onChange={this.handleTypeInput}/>
          </div>
          <span  className="btn btn-primary" onClick={this.handleUpdateSubmit}>Submit</span>
        </form>
    </div>    
    );
  }
});

module.exports = ProjectForm;