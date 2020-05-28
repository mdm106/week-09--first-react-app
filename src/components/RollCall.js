import React, { Component } from "react";

class RollCall extends Component {
    constructor(props) {
        super(props);

        this.state = { index: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let currentIndex = this.state.index;

        this.setState({ index: currentIndex < this.props.names.length - 1 ? currentIndex + 1 : 0});
        // this.setState({
        //     index: (this.state.index + 1) % names.length,
        // }); //
    }

    render() {
        const { index } = this.state;
        const { names } = this.props;

        return (
            <>  
                <p>Name: { names[index] }</p>
                <button className="btn-primary mb-4" onClick={this.handleClick}>Next</button>
            </>
        )
    }
};

RollCall.defaultProps = {
    names: ["Tom", "Dick", "Harry"],
};

export default RollCall;