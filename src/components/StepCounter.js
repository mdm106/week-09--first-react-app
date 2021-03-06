import React, { Component } from "react";

class StepCounter extends Component {
    constructor(props) {
        super(props);

        this.state = { counter: 0 };

        this.handleClickPlus = this.handleClickPlus.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }

    handleClickPlus() {
        let currentCounter = this.state.counter;
        let count = currentCounter + this.props.step;
        this.setState({ counter: count <= this.props.max ? count : currentCounter });
    }

    handleClickMinus() {
        let currentCounter = this.state.counter;
        let count = currentCounter - this.props.step;
        this.setState({ counter: count >= 0 ? count : currentCounter });
    }

    render() {
        const { counter } = this.state;

        return (
            <>
                <p>Counter: {counter} </p>
                <div className="d-flex flex-row">
                    <button className="btn-success mb-4" onClick={this.handleClickPlus}>+</button>
                    <button className="btn-danger mb-4" onClick={this.handleClickMinus}>-</button>
                </div>
            </>
        )
    }
};

StepCounter.defaultProps = {
    max: 100,
    step: 5
};

export default StepCounter;