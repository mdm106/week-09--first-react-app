import React, { Component } from "react";

import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class Progress extends Component {
    constructor(props) {
        super(props);

        this.state = { status: 0, };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let currentStatus = this.state.status;

        this.setState({ status: currentStatus + 10 });
    }
    
    render() {
        let { status } = this.state;

        return (
        <Container>
            <ProgressBar now={status} label={`${status}%`}/>
            <Button onClick={ this.handleClick } 
                    variant="primary"
                    disabled={status >= 100}>More!</Button>
        </Container>
        );
    }
}


export default Progress;