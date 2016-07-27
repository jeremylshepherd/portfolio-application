var React = require("react");

var InfoColumn = React.createClass({
   render: function() {
       return (
            <div className="col-md-4 col-xs-12">                
                <h3 className="text-center">
                  <span className={"fa " + this.props.className}/>
                  {"  " + this.props.name}
                </h3>
                <p>{this.props.description}</p>
            </div>
        );
   } 
});

module.exports = InfoColumn;