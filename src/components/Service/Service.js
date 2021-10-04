import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Card';
import Course from '../Course/Course';
import './Service.css';

const Service = () => {

    const [courses, setCourses] = useState([]);
    useEffect( () => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    } , []);

    return (
        <div className="card-service">
            <h1 className="header-title">Our Services</h1>
           <Row xs={1} md={3} className="g-4">                  
            {
                courses.map(course => <Course course = {course}></Course>)
            }
            </Row> 
        </div>   
    );
};

export default Service;