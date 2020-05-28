import React, { Component } from "react";

class Colours extends Component {
    constructor(props) {
        super(props);

        this.state = { index: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let currentIndex = this.state.index;

        this.setState({ index: currentIndex < this.props.colours.length - 1 ? currentIndex + 1 : 0});
    }

    render() {
        const { index } = this.state;
        const { colours } = this.props;

        return (
            <div className="mb-4" onClick={this.handleClick} style={{width: 200, height: 200, backgroundColor: colours[index]}}>
            </div>
        )
    }
};

Colours.defaultProps = {
    colours: [
        "#C14412",
        "#EBB31A",
        "#8F5318",
        "#009EAD",
        "#395967",
    ],
};

export default Colours;