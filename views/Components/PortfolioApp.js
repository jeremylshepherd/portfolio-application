var React = require("react"),
    PortfolioNav = require("./PortfolioNav"),
    PortfolioFooter = require("./PortfolioFooter"),
    PortfolioBanner = require("./PortfolioBanner"),
    PortfolioProjects = require("./PortfolioProjects"),
    PortfolioContact = require('./PortfolioContact'),
    PortfolioAbout = require("./PortfolioAbout"),
    $ = require("jquery");


var PortfolioApp = React.createClass({
  
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
  
  getInitialState: function() {
    return ({data: [], auth: false, showAuth: false});
  },
  
  componentDidMount: function() {
    this.getUser();
  },
  
  handleShowAuth: function() {
    this.setState({showAuth: !this.state.showAuth});
  },
  
  render: function() {
    return (
      <div>
        <PortfolioNav auth={this.state.auth} showAuth={this.state.showAuth}/>
        <main>
          {this.props.children}
        </main>
        <PortfolioFooter showAuth={this.handleShowAuth}/>
      </div>
    );
  }
});

module.exports = PortfolioApp;