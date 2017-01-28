import React from 'react';

var PortfolioProjects = React.createClass({
  getInitialState: function() {
   return {query: ''};
  },
  
  handleQuery: function(e) {
   this.setState({query: e.target.value});
  },
  
  clearQuery: function() {
   this.setState({query: ''});
  },
 
  queryCheck: function(r, query) {
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
  },
 
 render: function() {  
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
        <div className="col-sm-4 col-xs-12 frame" key={i}>
          <a href={project.url}>
            <span className="overlay"><p>{project.title + ':'} <br/> { technologies}<br/>{"Project type: " + project.type}</p></span>
            <img
              className="image img-responsive"
              src={project.img}
            />
            <h5>{project.title}</h5>
          </a>
        </div>
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
});

module.exports = PortfolioProjects;