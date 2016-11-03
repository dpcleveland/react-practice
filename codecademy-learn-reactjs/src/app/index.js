var React = require('react');
var ReactDOM = require('react-dom');

var fiftyFifty = Math.random() < 0.5;

// React.createClass call begins here:
var TonightsPlan = React.createClass({
    render: function() {
        var result = undefined;
        if (fiftyFifty) {
            result = "Tonight I'm going out WOOO";
        } else {
            result = "Tonight I'm going to bed WOOO";
        }

        return <h1>{result}</h1>;

    }
});
ReactDOM.render(
    <TonightsPlan/>, document.getElementById('app'));
