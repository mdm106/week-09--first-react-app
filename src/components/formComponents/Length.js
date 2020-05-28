import React, { Component } from "react";

class Length extends Component {
    constructor(props) {
        super(props);

        this.state = { input: ""};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    render() {
        const { input } = this.state;

        return (
          <form>
              <input
                value={ input }
                onChange={(e) => this.handleChange(e)}
              />
              <p>Input Length: { input.length } </p>
          </form>
        )
    }
}

export default Length;