var InfoColumn = require("./InfoColumn");
var React = require("react");

var InfoBox = React.createClass({
    render: function() {
        return (
            <div className="container">
                <InfoColumn/>
                <InfoColumn/>
                <InfoColumn/>
            </div>
        );
    }
});

module.exports = InfoBox;