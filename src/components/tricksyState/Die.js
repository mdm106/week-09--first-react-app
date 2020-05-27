import React, { Component } from "react";

class Die extends Component {
    constructor(props) {
        super(props);

        this.state = { number: 1 };

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState({number: Math.ceil(Math.random() * this.props.sides)});
    }

    render() {
        const { number } = this.state;
        return (
            <div onClick={this.handleClick} style={{height: 50, width: 50, fontSize: 30, textAlign: "center", border: "black 2px solid" }}>
                {number}
            </div>
        )
    }
};

Die.defaultProps = {
    sides: 6,
};

export default Die;