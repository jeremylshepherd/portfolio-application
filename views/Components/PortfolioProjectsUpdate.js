import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

var PortfolioProjectsUpdate = React.createClass({
    getInitialState: function() {
        return {data: []};    
    },
    
    loadProjects: function() {
        $.ajax({
            url: '/api/jeremylshepherd/projects',
            dataType: 'json',
            cache: false,
            success: function(data) {
            this.setState({
                data: data
              });
            }.bind(this),
            error: function(xhr, status, err) {
            console.error('/api/jeremylshepherd/projects', status, err.toString());
            }.bind(this)
        });
    },
    
    componentDidMount() {
        this.loadProjects();
    },
    
    render: function() {  
        var ThumbNodes = this.state.data.map(function(project, i) {
            return (
                <li className="list-group-item" key={i}><Link to={`${project._id}`}>{project.title}</Link></li>
            );
        });
        return (
          <div id="portfolio" className="container-fluid">
          <div className="panel panel-default main">
                <div className="constrain row">
                  <h2 className="panel-heading">Projects</h2>
                  <ul className="list-group">
                    {ThumbNodes}
                  </ul>
                </div>
            </div>
          </div>
        );
      }
});

module.exports = PortfolioProjectsUpdate;