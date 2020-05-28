import React, { Component } from "react";

class Square extends Component {
    constructor(props) {
        super(props);

        this.state = { clicker: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let currentClicker = this.state.clicker;

        this.setState({ clicker: !currentClicker });
    }

    render() {
        const { colour } = this.props;
        const { clicker } = this.state;

        return (
            <div className="mb-4" onClick={this.handleClick} style={{ width: 200, height: 200, backgroundColor: clicker ? "green" : colour}}>
            </div>
        )
    }
};

Square.defaultProps = {
    colour: "hotpink"
};

export default Square;