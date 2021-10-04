import React from 'react';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <div>
            <Service></Service>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Contact></Contact>
            </div>
        </div>
        
    );
};

export default Home;