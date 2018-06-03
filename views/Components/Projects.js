import React, { Component } from 'react';
import Thumb from './Thumb';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
    
    this.handleQuery = this.handleQuery.bind(this);
    this.clearQuery = this.clearQuery.bind(this);
    this.queryCheck =- this.queryCheck.bind(this);
  }
  
  handleQuery(e) {
   this.setState({query: e.target.value});
  }
  
  clearQuery() {
   this.setState({query: ''});
  }
 
  queryCheck(r, query) {
    query = query.toLowerCase();
    let tech = r.technologies.join(', ');
    if(
      r.title.toLowerCase().indexOf(query)      !== -1 ||
      tech.toLowerCase().indexOf(query)     !== -1 ||
      r.type.toLowerCase().indexOf(query)  !== -1
    ){
      return true;
    }else{
      return false;
    }
  }
 
 render() {  
    var filtered;
    if(this.state.query){
      filtered = [];
      this.props.data.map((r) => {
        if(this.queryCheck(r, this.state.query)){
          filtered.push(r);
        }
      });
    }else{
      filtered = this.props.data;
    }
    var ThumbNodes = filtered.map(function(project, i) {
      var technologies = project.technologies.join(', ');
      return (
        <Thumb key={project._id} url={project.url} title={project.title} type={project.type} img={project.img} technologies={technologies}/>
        );
    });
    return (
      <div id="portfolio" className="container-fluid portfolio">
        <div className="constrain row">
          <h2>Projects</h2>
          <form className="form-group col-xs-12">
            <div className="input-group">
              <input type="text" className="form-control" value={this.state.query} placeholder="Search..." onChange={this.handleQuery} />
              <div className="input-group-addon" onClick={this.clearQuery}>Clear</div>
            </div>
          </form>
          {ThumbNodes}
        </div>
      </div>
    );
  }
}

module.exports = Projects;
