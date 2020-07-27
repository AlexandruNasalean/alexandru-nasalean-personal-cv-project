import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import {Form, Row, Col} from "react-bootstrap";
import axios from "axios";
import './ContactPage.scss'


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
    componentDidUpdate(){
      setTimeout(() => this.setState({sent:false}), 7500);
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
          console.log('message not sent');
          
        })
        
       
       }

    resetForm = () =>{

      this.setState({
        email: [],
        FullName: [],
        textarea: [],
        sent: false,
      })
    }
    

    render() {
        const {FullName, email, textarea, sent} =  this.state;
        return (
          <div className="container-wrap">
          <div className="container">
          <p>Contact me</p>
            <div className="contact-container">
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
  <Form.Group controlId="validationCustom01">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    required
    type="email"
    placeholder="Enter email"
    name="email"
    value={email}
    onChange={this.changeHandler} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group ccontrolId="validationCustom01">
    <Form.Label>Leave me a message down bellow:</Form.Label>
    <Form.Control 
    required
    as="textarea" 
    rows="3" 
    name="textarea"
    value={textarea}
    onChange={this.changeHandler}
    />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <div className="Confirmation-wrap">
  {(sent)?<h1>The Email has been sent!</h1>:""}
  </div>
</Form>

            </div>
          </div>
          </div>
         );
    }
}
 


