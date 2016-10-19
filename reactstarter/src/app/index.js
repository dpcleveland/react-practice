var React = require('react');
var ReactDOM = require('react-dom');

// Create component
var TodoComponent = React.createClass({
    render: function(){
        return(
            <div>
                <p>{this.props.mssg}</p>
                <p><strong>Cheese name:</strong> {this.props.cheese.name}</p>
                <p><strong>Cheese smell factor:</strong> {this.props.cheese.smellFactor}</p>
                <p><strong>Cheese price:</strong> {this.props.cheese.price}</p>
            </div>
        );
    }
});

var myCheese = {
    name: 'Camembert',
    smellFactor: 'Extreme',
    price: '3.50'
};

// Put component into HTML page
ReactDOM.render(<TodoComponent mssg="I like cheese" cheese={myCheese} />, document.getElementById('todo-wrapper'))
