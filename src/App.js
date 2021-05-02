import React from "react";
import './styles/App.scss';
import TopNav from './components/TopNav';
import Hero from './components/Hero';
import ProjectSwitcher from './components/ProjectSwitcher';

function App() {
  return (
    <div>
      <div className="site-overall-container">
      <div className="left-gutter"/>
      {/* <div clasName="col-2"/>
      <div clasName="col-3"/>
      <div clasName="col-4"/>
      <div clasName="col-5"/> */}
      <div className="right-gutter"/>

      {/* Top nav */}
      <div className="top-nav-container">
        <div className="top-nav-content">
        <TopNav />
        </div>
      </div>

      {/* Homepage content starts here */}
      <Hero/>
  

      {/* Top nav */}
      <ProjectSwitcher/>
      
      <div className="footer-container">
        <div className="footer-content">
          <span className="footer-content-text">Website design by Tim Pike, &#169; 2021</span>
        </div>
      </div>
    </div>
    </div>);
}

export default App;