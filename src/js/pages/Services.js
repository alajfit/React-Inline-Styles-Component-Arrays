import React from "react";

import Service from "../components/Service";

export default class Services extends React.Component {
    render() {
        const Servicelist = [
            "Marketing",
            "Web Dev",
            "Strategy"
        ].map((title, i) => <Service key={i} title={title}/>);

        const { params } = this.props;
        const { service } = params;
        const { query } = this.props.location;
        const { date, filter } = query;
        
        return (
            <div>
                <h1>Services ({service})</h1>
                <h4>Date: {date}, Filter: {filter}</h4>
                <div class="row">{Servicelist}</div>
            </div>
        );
    }
}
