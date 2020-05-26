import React, { Component } from "react";

class ToggleText extends Component {
    constructor(props) {
        super(props);

        this.state = { toggle: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ toggle: !this.state.toggle });
    }

    render() {
        const { initial, alternate } = this.props;
        const { toggle } = this.state;

        return (
            <>
                <p>
                    {toggle ? initial : alternate}
                </p>
                <button onClick={this.handleClick}>
                    Toggle
                </button>
            </>
        )
    }
};

ToggleText.defaultProps = {
    initial: "Hello",
    alternate: "World"
};





export default ToggleText;