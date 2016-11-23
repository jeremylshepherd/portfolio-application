var React = require("react"),
    Link = require("react-router").Link;

var Nav = React.createClass({
    render: function() {
        let icon = this.props.avatar !== '' ? (
            <div className="navbar-right"><img src={this.props.avatar} className="img-circle icon"/>
                <a href="/logout" className="btn btn-danger navbar-btn"><span className="fa fa-eject"/> Logout</a>
            </div>
        ) : (
            <div className="navbar-right">
                <h4 className="navbar-text">Login or Register with:</h4>
                <a href="/auth/github" className="btn btn-custom-darken"><span className="fa fa-github" alt="github logo"></span> Github</a>
            </div>
        );
        return (
            <nav className="navbar navbar-inverse navbar-static-top">
              <div className="container">
                <Link to='/'>
                    <h1 className="navbar-brand">
                        FCC Voting App
                    </h1>
                    <i className="fa fa-free-code-camp fa-3x" aria-hidden="true"></i>
                </Link>
                <ul className="nav navbar-nav">
                    <li><Link to='/polls'>All Polls</Link></li>
                </ul>
                {icon}
              </div>
            </nav>
        );
    }
});

module.exports = Nav;