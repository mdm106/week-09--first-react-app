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
            numbers: [...this.state.numbers, parseFloat(this.state.input)], // parseFloat to convert variable to a number
        });
    }

    totalalise(){
        return this.state.numbers.reduce((total, val) => total + val, 0);
    }

    render() {
        return(
            <>  
                <input
                    value={ this.state.input }
                    onChange={(e) => this.handleChange(e)}
                    type="number"
                />
                <button className="btn-primary" onClick={(e) => this.handleClick(e)}>
                    Add
                </button>
                <ul>
                    {this.state.numbers.map((number, index) => (
                        <li key= { index }>
                            { number }
                        </li>
                    ))}
                </ul>
                <p>Total: {this.totalalise()}</p>
            </>
        )
    }
}

export default Adder;