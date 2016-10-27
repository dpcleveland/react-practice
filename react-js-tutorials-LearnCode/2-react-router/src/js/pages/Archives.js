import React from "react";

export default class Archives extends React.Component {
    render() {
        console.log(this.props);
        const { query } = this.props.location;
        const { params } = this.props;
        const { article } = params;
        const { date, filter } = query;
        return (
            <div>
                <h1>Archives</h1>
                <h2>({article})</h2>
                <h3>date: {date}, filter: {filter}</h3>
            </div>

        );
    }
}
