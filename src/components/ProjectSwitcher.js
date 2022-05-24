import React, {useState} from 'react';
import Project from './Project';

const ProjectSwitcher = () => {
    const [project, setProject] = useState("Journeys & blueprints")
    const handleJourneysClick = () => setProject("Journeys & blueprints")
    const handleAccessibilityClick = () => setProject("Accessibility")
    const handleStorytellingClick = () => setProject("Storytelling")
    const handlePatternsClick = () => setProject("Content patterns")
    const handleFeedbackClick = () => setProject("Balancing feedback")
    const handleContentLibClick = () => setProject("Roadmapping")
    
  
    return (
      <div className="projects-container">
          <div className="projects-nav-header" id="projects">
          Tim's projects
          </div>
          <div className="projects-nav-subheader">
          Check out my work below so you can see what I'm all about.
          </div>
          <div className="projects-nav-container">
          <span className="project-buttons-container">
          <button onClick={handleJourneysClick} className="project-button">Journeys & blueprints</button>
          <button onClick={handleAccessibilityClick} className="project-button">Accessibility</button>
          <button onClick={handleStorytellingClick} className="project-button">Storytelling</button>
          <button onClick={handlePatternsClick} className="project-button">Content patterns</button>
          <button onClick={handleFeedbackClick} className="project-button">Balancing feedback</button>
          <button onClick={handleRoadmapClick} className="project-button">Roadmapping</button>
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
