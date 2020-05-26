import React, { Component } from "react";

class Clicked extends Component {
    constructor(props) {
        super(props);

        this.state = { checker: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ checker: true });
    }

    render() {
        const { checker } = this.state;

        return (
            <p onClick={this.handleClick}>
                {!checker ? "Not Clicked" : "Clicked"}
            </p>
        );
    }
}

export default Clicked;