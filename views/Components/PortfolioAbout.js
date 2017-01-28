import React from 'react';

var PortfolioAbout = React.createClass({
  render: function() {
    return(
      <div id="about-container" className="container-fluid">
        <div id="about" className="about-me row">
          <div className="col-md-6 hidden-sm-down">
            <img id="self" className="img-responsive self center-block" src="/dist/Jer Square.jpg" alt="Jeremy L. Shepherd"/>
          </div>
          <div className="about col-md-6 col-xs-12">
            <p>I am a self-taught full-stack developer. In 2014, I began teaching myself front-end development in order to start a new career. I have spent the past 18 years working in law enforcement. I have a passion for building functional and beautiful web applications that enhance people's lives and free them to spend their focus and energy on following their passions.
              <br/>
              <br />
              <span>Compentencies:</span>
              <br/> MEAN/MERN stack (MongoDB, ExpressJS, AngularJS, ReactJS, NodeJS)
              <br/> Ruby on Rails, ERB, HAML, SASS, RSPEC,
              <br/> D3, Jade, EJS, HTML5, CSS3, Vanilla JS, jQuery, MongooseJS, and Bootstrap
            </p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = PortfolioAbout;