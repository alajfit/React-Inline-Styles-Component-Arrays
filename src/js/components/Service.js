import React from "react";

export default class Service extends React.Component {
    render() {
        const { title } = this.props;
        return (
            <div>
                <h1>Service: {title}</h1>
                <h4>What this is?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna lorem, molestie ut dapibus vehicula, bibendum a augue. Donec id neque blandit, finibus ipsum vel, egestas dui. Donec placerat dapibus suscipit. Nulla in volutpat nunc, suscipit facilisis risus. Aenean velit eros, volutpat at ex ut, cursus auctor ipsum. Vestibulum lacinia condimentum augue et vulputate. Aenean consectetur molestie tortor vitae ultrices. Morbi quis diam elit. Pellentesque a arcu eu est cursus maximus tincidunt ac nisi. Nulla dolor magna, molestie id dolor pharetra, placerat maximus mi. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempor sem dictum leo aliquet, sed pretium leo consectetur.</p>
                <br />
            </div>
        );
    }
}
