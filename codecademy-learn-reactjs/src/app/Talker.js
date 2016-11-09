var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');

function talk() {
    for (var speech = '', i = 0; i < 10000; i++) {
        speech += 'blah ';
    }
    alert(speech);
}

var Talker = React.createClass({
    render: function() {
        return <Button/>;
    }
});

ReactDOM.render(
    <Talker/>, document.getElementById('app'));
