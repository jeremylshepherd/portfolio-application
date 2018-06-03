import React, { Component } from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

class ProjectsUpdate extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
        
        this.loadProjects = this.loadProjects.bind(this);
    }
    
    loadProjects() {
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
    }
    
    componentDidMount() {
        this.loadProjects();
    }
    
    render() {  
        var ThumbNodes = this.state.data.map(function(project, i) {
            return (
                <li className="list-group-item" key={i}><Link to={`${project._id}`}>{project.title}</Link></li>
            );
        });
        return (
          <div id="portfolio" className="container-fluid">
            <div className="constrain row">
                <div className="panel panel-default main">
                  <h2 className="panel-heading">Projects</h2>
                  <div className="panel-body">
                  <ul className="list-group">
                    {ThumbNodes}
                  </ul>
                  </div>
                </div>
            </div>
          </div>
        );
      }
}

module.exports = ProjectsUpdate;