var React = require('react');
var ReactDOM = require('react-dom');

require('../css/todo-list.scss');

// Create component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat', 'take a nap', 'study']
        }
    },
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(
                <TodoItem key={index} item={item} />
            );
        });
        return(
            <div id="todo-list">
                <p>The busiest people have the most leisure...</p>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    } // render
});

// Create TodoItem component
var TodoItem = React.createClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                </div>
            </li>
        );
    }
});

// Put component into HTML page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'))
