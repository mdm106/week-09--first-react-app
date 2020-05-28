import React, { Component } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

class ListPB extends Component {
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
                <Form.Control
                    value={ this.state.input }
                    onChange={(e) => this.handleChange(e)}
                    type="text"
                    className="mb-1"
                />
                <Button onClick={(e) => this.handleClick(e)}>
                    Add Item
                </Button>
                <ListGroup>
                    {this.state.items.map((item, index) => (
                        <ListGroup.Item key= { index }>
                            { item }
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </>
        )
    }
}

export default ListPB;