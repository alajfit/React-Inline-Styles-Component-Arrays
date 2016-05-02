import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {

    render() {
        const { location } = this.props;
        const containerStyle = {
            paddingTop: "70px"
        };

        return (
            <div style={containerStyle}>
                <Nav location={location} />
                <div class="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
