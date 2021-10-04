import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div>
           <h1 className='header-title mt-5'>Contact Us</h1>
           <div className="contact-container">
                <Form>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control className='mb-3' placeholder="First name" />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control className='mb-3' placeholder="Last name" />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                </Form>
            </div>  
        </div>
    );
};

export default Contact;