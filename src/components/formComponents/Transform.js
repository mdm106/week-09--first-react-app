import React, { Component } from "react";

class Transform extends Component {
    constructor(props) {
        super(props);

        this.state = { input: "" }
        
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }


    render() {
        const { input } = this.state;
        const { transform } = this.props;
        return(
            <>
                <input
                    onChange={(e) => this.handleChange(e)}
                    type="number"
                    value={ this.state.input }
                />
                <p>Answer: { input!=="" ? transform(Number(input)) : "" }</p>
            </>
        )
    }
}

export default Transform;