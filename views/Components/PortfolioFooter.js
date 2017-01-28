import React from 'react';

var PortfolioFooter = React.createClass({
    passThruAuth: function() {
      this.props.showAuth();
    },
  
    render: function() {
      return(
        <div className="container-fluid navbar-inverse navbar-fixed-bottom">
        <div className="row">
          <footer>
            <div className="col-xs-6">
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><i className="fa fa-coffee" aria-hidden="true"></i></li>
                <li><a href="#about">About</a></li>
                <li><i className="fa fa-coffee" aria-hidden="true"></i></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><i className="fa fa-coffee" aria-hidden="true" onClick={this.passThruAuth}></i></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-xs-12 copyright">
              <h6>Copyright © Jeremy L. Shepherd 2016. All Rights Reserved</h6>
            </div>
          </footer>
        </div>
    </div>
    )
  }
});

module.exports = PortfolioFooter;