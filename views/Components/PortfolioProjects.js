import React from 'react';

var PortfolioProjects = React.createClass({
 render: function() {  
    var ThumbNodes = this.props.data.map(function(project, i) {
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
          {ThumbNodes}
        </div>
      </div>
    )
  }
});

module.exports = PortfolioProjects;