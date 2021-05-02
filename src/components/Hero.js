import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route
//   } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-main-image">
            </div>
            <div className="hero-eyebrow-title-container">
            <div className="hero-eyebrow">Welcome! It's me here,
            </div>
            <div className="hero-title">
                Tim Pike
                </div>
            </div>
            <div className="hero-main-content">
                
                <div className="hero-description">
                And I'm a content...
                    <ul>
                        <li className="writer-bullet">Writer</li>
                        <li className="designer-bullet">Designer</li>
                        <li className="strategist-bullet">Strategist</li>
                    </ul>
                    {/* I also dabble in web development. */}
                    
                </div>
                {/* <div className="contact-button-container">
                <Router>
                
                <HashLink smooth to="/#projects"><button className="contact-tim-button">See Tim's work</button></HashLink>
                
                <Switch>
                <Route path="/">
                    <Home />
                </Route>
                </Switch>
                </Router>
                </div> */}
            </div>
        </div>
    )
}

// function Home() {
//     return <div></div>;
//   }

export default Hero;