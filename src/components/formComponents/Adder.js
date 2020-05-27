import React, { Component } from "react";

class Adder extends Component {
    constructor(props) {
        super(props);

        this.state = { input: 0, numbers: [] }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    handleClick(e) {
        this.setState({ 
            input: 0, 
            numbers: [...this.state.numbers, this.state.input],
            total: this.state.numbers.reduce((total, val) => parseFloat(total) + parseFloat(val), this.state.input),
        });
    }

    render() {
        return(
            <>
                <input
                    value={ this.state.input }
                    onChange={(e) => this.handleChange(e)}
                    type="number"
                />
                <button onClick={(e) => this.handleClick(e)}>
                    Add
                </button>
                <ul>
                    {this.state.numbers.map((number, index) => (
                        <li key= { index }>
                            { number }
                        </li>
                    ))}
                </ul>
                <p>Total: {this.state.total}</p>
            </>
        )
    }
}

export default Adder;