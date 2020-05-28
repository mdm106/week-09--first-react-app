import React, { Component } from "react";

import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';

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
        <>  
            <ProgressBar now={status} label={`${status}%`}/>
            <Button onClick={ this.handleClick } 
                    variant="primary"
                    disabled={status >= 100 ? "disabled" : null}>More!</Button>
        </>
        );
    }
}


export default Progress;