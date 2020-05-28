import React, { Component } from "react";
// import date picker CSS
import "react-datepicker/dist/react-datepicker.css"; // import date picker component
import Alert from 'react-bootstrap/Alert'
     
import DatePicker from "react-datepicker";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Dates extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        dateOne: new Date(),
        dateTwo: new Date(),
      }
      // bind handleDate method
      this.handleDateOne = this.handleDateOne.bind(this); 
      this.handleDateTwo = this.handleDateTwo.bind(this); 
    }
    // the date picker onChange function gets passed
    // the selected date by the date picker
    handleDateOne(date) {
      // update the state
        this.setState({ dateOne: date }); 
    }

    handleDateTwo(date) {
      // update the state
        this.setState({ dateTwo: date }); 
    }
    
    render() {
      // get the current date
    let { dateOne, dateTwo } = this.state;
    let difference = (Math.floor(Math.abs(dateTwo - dateOne) / 86400000))
      // set the selected date to the date in state
      // set the onChange prop to the handleDate method
    return (
    <Container >
      <Row>
        <Col className="py-3 px-md-5">
          <DatePicker
            selected={ dateOne }
            onChange={ this.handleDateOne }
          />
        </Col>
        <Col className="py-3 px-md-5">
          <DatePicker
            selected={ dateTwo }
            onChange={ this.handleDateTwo }
          />
        </Col>
      </Row>
      <Row>
        <Col className="py-3 px-md-5">
          <Alert variant="primary">
            { difference } days
          </Alert>
        </Col>
      </Row>
    </Container>
    ); 
  }
}

export default Dates;