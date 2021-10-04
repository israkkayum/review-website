import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className="header-title mt-5">About Us</h1>
            <div className="contact-container">
                   <h2>What is CodeCamp?</h2>
                   <p>
                   We’re a nonprofit community that helps you learn to code by building projects.
                   </p>
                   <h2>How can you help me learn to code?</h2>
                   <p>You'll learn to code by completing coding challenges and building projects. You'll also earn verified certifications along the way.</p>
                   <h2>Is CodeCamp really free?</h2>
                   <p>Yes. Every aspect of CodeCamp is 100% free.</p>
                   <h2>Can CodeCamp help me get a job as a software developer</h2>
                   <p>Yes. Every year, thousands of people who join the CodeCamp community get their first software developer job. If you're curious, you can browse our alumni network on LinkedIn here.</p>
                   <h2>How big is the CodeCamp community?</h2>
                   <p>If you add up all the people who use our learning platform, read our publication, watch our YouTube channel, and post on our forum, every month we help millions of people learn about coding and technology.</p>
            </div>
        </div>
    );
};

export default About;