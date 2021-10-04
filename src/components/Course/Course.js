import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {

    const {name, video, assignment, quizes, price, img} = props.course;

    return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} className='card-img'/>
        <Card.Body>
          <Card.Title className='card-title'>{name}</Card.Title>
          <Card.Text>
            <h3>Assignment : {assignment}</h3>
            <h3>Videos : {video}</h3>
            <h3>Quizes : {quizes}</h3>
            <h3>Price : {price}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Course;