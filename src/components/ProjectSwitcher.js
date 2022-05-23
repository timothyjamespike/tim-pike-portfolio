import React, {useState} from 'react';
import Project from './Project';

const ProjectSwitcher = () => {
    const [project, setProject] = useState("Journeys & blueprints")
    // const handleGuidanceClick = () => setProject("Content guidance");
    const handleDesignSysClick = () => setProject("Accessibility");
    const handleContentFilterClick = () => setProject("Storytelling")
    const handleHelpContentClick = () => setProject("Content patterns")
    const handleContentLibClick = () => setProject("Roadmapping")
    
  
    return (
      <div className="projects-container">
          <div className="projects-nav-header" id="projects">
          Tim's Projects
          </div>
          <div className="projects-nav-subheader">
          Check out my work below so you can see what I'm all about.
          </div>
          <div className="projects-nav-container">
          <span className="project-buttons-container">
          <button onClick={handleContentFilterClick} className="project-button">Content filtering</button>
          <button onClick={handleDesignSysClick} className="project-button">Design systems</button>
          <button onClick={handleHelpContentClick} className="project-button">Help content</button>
          {/* <button onClick={handleGuidanceClick} className="project-button">Content guidance</button> */}
          {/* <button onClick={handleContentLibClick} className="project-button">Content library</button> */}
          </span>
        <div>
          
        </div>
          </div>
          <div className="project-header">
                {project}
                          </div>
            <div className="project-container">
                <Project projectName={project}/>
            </div>
      </div>
    )
  }

export default ProjectSwitcher;
