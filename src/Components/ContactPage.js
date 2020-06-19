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
        require('dotenv').config();
        const nodemailer =  require('nodemailer');


        //Step 1

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
        });

        //Step 2
        let mailOptions ={
            from: this.state.email,
            to: 'alexandru.nasalean.off@gmail.com',
            subject: 'Testing',
            text: this.state.textarea,
        }

        //Step 3

        transporter.sendMail(mailOptions, function(err, data){
            if(err){
                console.log("error occured")
            }else{
                console.log("Email sent!")
            }
        })

        console.log(this.state.FullName);
        console.log(this.state.email);
        console.log(this.state.textarea)
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
 