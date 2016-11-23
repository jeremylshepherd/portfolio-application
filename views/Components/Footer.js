var React = require("react"),
    Link = require("react-router").Link;

var Footer = React.createClass({
    render: function () {
        return (
            <footer className="navbar navbar-inverse navbar-fixed-bottom">
              <div className="container">
                <a href='http://twitter.com/jeremylshepherd'>
                    <h1 className="navbar-brand">
                        @Jeremy L Shepherd
                    </h1>
                </a>
                <div className= "navbar-right">
                    <h4 className="navbar-text navbar-right">
                        ...in partial completion of Backend Certification.
                        <i className="fa fa-free-code-camp fa-3x" aria-hidden="true"></i>
                    </h4>
                </div>
              </div>
            </footer>
        );
    }
});

module.exports = Footer;