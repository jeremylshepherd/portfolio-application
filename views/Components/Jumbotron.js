var React = require("react");

var Jumbotron = React.createClass({
    getInitialState: function() {
        return ({
           isShadow: false,
           shadow: ""
        });  
    },
    
    handleShadow: function() {
        this.state.isShadow ? this.setState({shadow: "shadow", isShadow: false}) : this.setState({shadow: "", isShadow: true});
    },
    
    render: function() {
        return (
            <div className="container">
                <div className={"jumbotron text-center " + this.state.shadow} onClick={this.handleShadow}>
                    <h1><span className="fa fa-user"></span> User Authentication</h1>
            
                    <p>Login or Register with:</p>
            
                    <a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus" alt="google logo"></span> Google</a>
                    <a href="/auth/github" className="btn btn-custom-darken"><span className="fa fa-github" alt="github logo"></span> Github</a>
                </div>
            </div>
            
        );
    }
});

module.exports = Jumbotron;