import React, { Component } from "react";

class CatchMeIfYouCan extends Component {
    constructor(props) {
        super(props);

        this.state = { counter: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let currentCounter = this.state.counter;

        this.setState({ counter: currentCounter + this.props.jump });
    }

    render() {
        const { counter } = this.state;

        return (
            <>
                <button onClick={this.handleClick} style={{ transform: `translateY(${counter}px)`}}>Button</button>
            </>
        )
    }
};

CatchMeIfYouCan.defaultProps = {
    jump: 100,
};

export default CatchMeIfYouCan;