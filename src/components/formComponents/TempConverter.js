import React, { Component } from "react";

class TempConverter extends Component {
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
          <form className="form-group">
              <label>Fahrenheit:</label>
              <input
                value={ this.state.fahrenheit }
                onChange={(e) => this.convertToCelsius(e)}
                type={"number"}
              />
              <label>Celsius:</label>
              <input
                value={ this.state.celsius }
                onChange={(e) => this.convertToFahrenheit(e)}
                type={"number"}
              />
          </form>
        )
    }
}

export default TempConverter;