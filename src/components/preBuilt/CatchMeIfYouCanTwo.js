import React, { Component } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class CatchMeIfYouCanTwo extends Component {
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
            <Container>
                <Button onClick={ this.handleClick } 
                    variant="primary"
                    style={{ transform: `translateY(${counter}px)`}}>
                    Jump!
                </Button>
            </Container>
        )
    }
};

CatchMeIfYouCanTwo.defaultProps = {
    jump: 100,
};

export default CatchMeIfYouCanTwo;