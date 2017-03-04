import React from 'react';
import $ from 'jquery';

var PortfolioAbout = React.createClass({
  getInitialState: function() {
    return ({
      bio: '',
      email: '',
      compentencies: [],
      img: ''
    });
  },
  
  getUser: function() {
    $.ajax({
      url: '/api/jeremylshepherd/data',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
            user: data,
            bio: data.bio,
            img: data.img,
            email: data.email,
            compentencies: data.compentencies
          });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/api/jeremylshepherd/data', status, err.toString());
      }.bind(this)
    });
  },
  
  componentDidMount: function() {
    this.getUser();
  },
  
  render: function() {
    let compentencies = this.state.compentencies.map((l, i) => {
      return (
        <span key={i} className="clearfix">{l}</span>
      );
    });
    return(
      <div id="about-container" className="container-fluid">
        <div id="about" className="about-me row">
          <div className="col-md-6 hidden-sm-down">
            <img id="self" className="img-responsive  img-rounded self center-block" src={this.state.img} alt="Jeremy L. Shepherd"/>
          </div>
          <div className="about col-md-6 col-xs-12">
            <p>{this.state.bio}
              <br/>
              <br />
              <span>Compentencies:</span>
              {compentencies}
            </p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = PortfolioAbout;