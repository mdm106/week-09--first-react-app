import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = { counter: this.props.initial };

        this.handleClickPlus = this.handleClickPlus.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }

    handleClickPlus() {
        let currentCounter = this.state.counter;

        this.setState({ counter: currentCounter < this.props.max ? currentCounter + 1 : currentCounter });
    }

    handleClickMinus() {
        let currentCounter = this.state.counter;

        this.setState({ counter: currentCounter > 0 ? currentCounter - 1 : currentCounter });
    }

    render() {
        const { counter } = this.state;

        return (
            <>
                <p>Counter: {counter} </p>
                <button className="btn-success" onClick={this.handleClickPlus}>+</button>
                <button className="btn-danger" onClick={this.handleClickMinus}>-</button>
            </>
        )
    }
};

Counter.defaultProps = {
    initial: 50,
    max: 100
};

export default Counter;