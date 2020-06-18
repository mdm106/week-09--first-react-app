import React, { Component } from "react";
import { BlockPicker } from 'react-color';

import Container from 'react-bootstrap/Container';

class Headline extends Component {
    constructor(props) {
        super(props);

        this.state = { display: false,
                       colourPicked: "#d9e3f0" };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.setState({ display: !this.state.display });
    }

    handleChange(color) {
        this.setState({ colourPicked: color.hex })
    }

    render() {
        const { display, colourPicked } = this.state;
        const { message } = this.props;

        return (
            <Container>
                <h1 onClick={this.handleClick} style={{ color: colourPicked, fontSize: 100 }}>
                    { message }
                </h1>
                { display ? 
                <BlockPicker color={ colourPicked } onChange={ this.handleChange } />
                : null}

            </Container>

        );
    }
}

Headline.defaultProps = {
    message: "Cats and Dogs!",
};

export default Headline;