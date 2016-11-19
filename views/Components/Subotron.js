var React = require("react");

var Subotron = React.createClass({
    render: function() {
        let polls = this.props.polls;
        let pollNodes = polls.map(function(poll, i) {
            return (
                <li key={i}>
                    <a href={'/' + poll._id}><h4>{poll.title}</h4></a>
                </li>
            );
        });
        return (
            <div className="container well well-lg">
                <h2 className="text-center">Here is a list of your polls. Click ADD to add an additional poll.</h2>
                {pollNodes}
            </div>
        );
    }
});

module.exports = Subotron;