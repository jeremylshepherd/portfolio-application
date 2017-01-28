var React = require("react"),
    ProjectForm = require("./ProjectForm"),
    $ = require('jquery');

    
var ProjectPage = React.createClass({
    getInitialState: function() {
        return ({
            auth: false,
            showAuth: false
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
    
    componentDidMount: function() {
        this.getUser();
    },
    
    
    handleShowAuth: function() {
    this.setState({showAuth: !this.state.showAuth});
    },
    
    render: function() {
        let unlogged = (<h3 className="formBody text-center">You must be logged in to add a new Project</h3>);
        let form = this.state.auth ? <ProjectForm /> : unlogged;
        return (
            <div>
            {form}
            </div>
        );
    }    
});

module.exports = ProjectPage;