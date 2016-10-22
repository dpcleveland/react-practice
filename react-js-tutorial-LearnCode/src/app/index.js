import React from 'react';
import ReactDOM from 'react-dom';

// require('../css/styles.scss');

class Layout extends React.Component {
    constructor(){
        super();
        this.name = "Daniel";
    }
    render(){
        return(
            <h1>It's {this.name}!</h1>
        );
    }
}

// Put component into HTML page
const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
