import React, { Component } from "react";

class PasswordStrength extends Component {
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
        let colour;
        if(input.length === 0){
            colour = null;
        } else if(input.length < 9){
            colour = "red";
        } else if(input.length < 16) {
            colour = "orange";
        } else {
            colour = "green";
        }

        return (
          <form className="form-group">
              <label>Password:
              <input
                value={ this.state.input }
                onChange={(e) => this.handleChange(e)}
                type={"password"}
                style={{backgroundColor: colour}}
              />
              </label>
          </form>
        )
    }
}

export default PasswordStrength;