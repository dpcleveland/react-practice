import React from 'react';
import ReactDOM from 'react-dom';

// require('../css/styles.scss');

class Layout extends React.Component {
    render(){
        return(
            <h1>It works!</h1>
        );
    }
}

// Put component into HTML page
const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
