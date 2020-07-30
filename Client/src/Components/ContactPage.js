import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import {Form, Row, Col} from "react-bootstrap";
import axios from "axios";


export class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            FullName: '',
            textarea: '',
            sent: false,
         }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

    submitHandler = (event) => {
        event.preventDefault();

        let data = {
          name:this.state.FullName,
          email: this.state.email,
          textarea: this.state.textarea,
        }

        axios.post('/api/forma',data)
        .then(res=>{
          this.setState({
            sent:true,
          },this.resetForm())
        })
        .catch(()=>{
          console.log('message not send');
          
        })
        
       
       }

    resetForm = () =>{

      this.setState({
        email: [],
        FullName: [],
        textarea: [],
      })
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
 