import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = { input: "", items: [] }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    handleClick(e) {
        this.setState({ input: "", items: [...this.state.items, this.state.input]});
    }

    render() {
        return(
            <>  
                <input
                    value={ this.state.input }
                    onChange={(e) => this.handleChange(e)}
                    type="text"
                    className="mb-1"
                />
                <button className="btn-primary" onClick={(e) => this.handleClick(e)}>
                    Add Item
                </button>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key= { index }>
                            { item }
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

export default List;