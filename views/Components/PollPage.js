var React = require("react"),
    ReactDOM = require("react-dom"),
    Poll = require("./Poll"),
    Nav = require("./Nav"),
    $ = require('jquery');

    
var PollPage = React.createClass({
    getInitialState: function() {
        return ({
           avatar: '',
           poll: {_id: 'zzzZZzzzZZzzzZZZzzzZZZzzzZZZzzzZZZ',title: '', options:[{text:'Init',votes:0}]}
        });
    },
    
    getPoll: function() {
        let pollId = this.props.params.poll;
        $.ajax({
          url: '/api/poll/' + pollId,
          dataType: 'json',
          cache: false,
          success: function(data) {
            this.setState({poll: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error('/api/poll/' + pollId, status, err.toString());
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
                  user: data,
                  avatar: data.github.avatar
                });
            }.bind(this),
            error: function(xhr, status, err) {
              console.error('/api/me', status, err.toString());
            }.bind(this)
        });
    },
    
    componentDidMount: function() {
        this.getPoll();
        this.getUser();
        this.checkPeriodically = setInterval(this.getPoll, 10000);
    },
    
    deletePoll: function(id) {
        $.ajax({
          url: '/api/delete/' + id,
          type: 'DELETE',
          success: function(data) {
              this.loadPolls();
          }.bind(this),
          error: function(xhr, status, err) {
            console.error('/' + id + '/delete', status, err.toString());
          }.bind(this)
        });
    },
    
    componentWillUnmount: function() {
        clearInterval(this.checkPeriodically);
    },
    
    render: function() {
        return (
            <div>
                <Nav avatar={this.state.avatar} />
                <div className="container">
                    <Poll key={0} poll={this.state.poll} del={this.deletePoll}/>
                </div>
            </div>
        );
    }    
});

module.exports = PollPage;