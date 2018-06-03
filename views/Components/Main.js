import React, { Component } from 'react';
import Banner from './Banner';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import CollapseCont from './CollapseCont';
import $ from 'jquery';


class Main extends Component {
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
    return (
      <div>
        <Banner />
        <CollapseCont>
          <About />
        </CollapseCont>
        <CollapseCont>
          <Projects data={this.state.data}/>
        </CollapseCont>
        <CollapseCont>
          <Contact />
        </CollapseCont>
      </div>
    );
  }
}

module.exports = Main;