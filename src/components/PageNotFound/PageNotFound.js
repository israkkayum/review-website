import React from 'react';
import img404 from '../../images/404.jpg'
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="contact-container ">
            <img className="w-50 h-50" src={img404} alt="" />
            <NavLink to ="/home"><span style={{fontSize: '35px', margin: '120px'}}>Please Back to Home</span></NavLink>
        </div>
    );
};

export default PageNotFound;


