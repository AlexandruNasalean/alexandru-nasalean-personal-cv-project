import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import {Form, Row, Col} from "react-bootstrap";


export class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: [],
            FullName: [],
            textarea: "",
         }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

    submitHandler = (event) => {
        event.preventDefault();
      console.log("SAD")
    }
    render() {
        const {FullName, email, textarea} =  this.state;
        return ( 
            <div className="container">
                <Form onSubmit={this.submitHandler}>
                <Form.Group  controlId="validationCustom01">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Full name"
            name="FullName"
            value={FullName}
            onChange={this.changeHandler}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email"
    placeholder="Enter email"
    name="email"
    value={email}
    onChange={this.changeHandler} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control 
    as="textarea" 
    rows="3" 
    name="textarea"
    value={textarea}
    onChange={this.changeHandler}
    />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

            </div>
         );
    }
}
 