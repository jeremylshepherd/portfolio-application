var React = require("react"),
    PortfolioNav = require("./PortfolioNav"),
    PortfolioFooter = require("./PortfolioFooter"),
    PortfolioBanner = require("./PortfolioBanner"),
    PortfolioProjects = require("./PortfolioProjects"),
    PortfolioContact = require('./PortfolioContact'),
    PortfolioAbout = require("./PortfolioAbout"),
    $ = require("jquery");


var PortfolioMain = React.createClass({
  
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
    this.loadProjects();
    this.getUser();
  },
  
  handleShowAuth: function() {
    this.setState({showAuth: !this.state.showAuth});
  },
  
  render: function() {
    return (
      <div>
        <PortfolioBanner />
        <PortfolioAbout />
        <PortfolioProjects data={this.state.data}/>
        <PortfolioContact />
      </div>
    );
  }
});

module.exports = PortfolioMain;