import React, { Component } from "react";

import Form from 'react-bootstrap/Form';

class TempConverterPB extends Component {
    constructor(props) {
        super(props);

        this.state = { fahrenheit: "", celsius: ""};

        this.convertToCelsius = this.convertToCelsius.bind(this);
        this.convertToFahrenheit = this.convertToFahrenheit.bind(this);
    }

    toCelsius(value) {
        return (value-32) * 5/9; 
    }

    toFahrenheit(value) {
        return (value * (9/5))+32;
    }

    convertToFahrenheit(e) {
        let currentCelsius = e.currentTarget.value;
        let currentFahrenheit = currentCelsius ? this.toFahrenheit(currentCelsius) : ""; //added so that if input is empty the input for the other temperature will also be empty
        this.setState({ celsius: currentCelsius, fahrenheit: currentFahrenheit });
    }

    convertToCelsius(e) {
        let currentFahrenheit = e.currentTarget.value;
        let currentCelsius = currentFahrenheit ? this.toCelsius(currentFahrenheit) : ""; //added so that if input is empty the input for the other temperature will also be empty
        this.setState({ fahrenheit: currentFahrenheit, celsius: currentCelsius });
    }

    render() {

        return (
          <Form>
              <Form.Label>Fahrenheit:
              <Form.Control
                value={ this.state.fahrenheit }
                onChange={(e) => this.convertToCelsius(e)}
                type="number"
              />
              </Form.Label>
              <Form.Label>Celsius:
              <Form.Control
                value={ this.state.celsius }
                onChange={(e) => this.convertToFahrenheit(e)}
                type={"number"}
              />
              </Form.Label>
          </Form>
        )
    }
}

export default TempConverterPB;