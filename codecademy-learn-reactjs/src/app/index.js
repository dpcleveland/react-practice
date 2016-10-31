var React = require('react');
var ReactDOM = require('react-dom');

require('../css/todo-list.scss');

// Create component
var MyComponentClass = React.createClass({
    render: function(){
        return(
            <h1>Hello world</h1>
        );
    }
});


// Put component into HTML page
ReactDOM.render(<MyComponentClass />, document.getElementById('app-wrapper'))
