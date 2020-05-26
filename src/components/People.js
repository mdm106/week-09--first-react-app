import React, { Component } from "react";

class People extends Component {

    handleClick() {
        console.log("Hello, world");
    }

    render () {
        let { names } = this.props;

        return (
            names ? (
                <ul onClick={ this.handleClick }>
                    {names.map((name, index) => (
                        <li key= { index }>
                            { name }
                        </li>
                    ))}
                </ul>
            ) : <p>Nothing to see here</p> 
        )
    }

}

export default People;