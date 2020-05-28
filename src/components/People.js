import React, { Component } from "react";

class People extends Component {

    handleClick() {
        console.log("Hello, world");
    }

    render () {
        let { names } = this.props;

        return (
            names.length ? (
                <ul className="list-group mb-4" onClick={ this.handleClick }>
                    {names.map((name, index) => (
                        <li className="list-group-item" key= { index }>
                            { name }
                        </li>
                    ))}
                </ul>
            ) : <p>Nothing to see here</p> 
        )
    }

}

export default People;