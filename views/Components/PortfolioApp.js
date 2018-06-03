import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import $ from 'jquery';

class PortfolioApp extends Component {
  constructor() {
    super();
    
    this.state = {
      auth: false,
      showAuth: false
    };
    
    this.getUser = this.getUser.bind(this);
    this.handleShowAuth = this.handleShowAuth.bind(this);
  }
  
  getUser() {
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
  }
  
  componentDidMount() {
    this.getUser();
  }
  
  handleShowAuth() {
    this.setState({showAuth: !this.state.showAuth});
  }
  
  render() {
    return (
      <div>
        <Nav auth={this.state.auth} showAuth={this.state.showAuth}/>
        <main>
          {this.props.children}
        </main>
        <Footer showAuth={this.handleShowAuth}/>
      </div>
    );
  }
}

module.exports = PortfolioApp;