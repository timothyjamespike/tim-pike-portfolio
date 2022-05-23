import React from 'react';
import ContentGuidanceProject from './ContentGuidanceProject';
import DesignSysProject from './DesignSysProject';
import ContentFilteringProject from './ContentFilteringProject';
import HelpContentProject from './HelpContentProject';

function Project(props) {
 const projectName = props.projectName;

 if (projectName === "Journeys & blueprints") {
     return (<ContentGuidanceProject/>);
 }
 
 else if (projectName === "Accessibility") {
     return (<DesignSysProject/>);
 }

 else if (projectName === "Content patterns") {
     return (<ContentFilteringProject/>);
 }
 
 else if (projectName === "Balancing feedback") {
     return (<HelpContentProject/>);
 }

 else if (projectName === "Roadmapping") {
     return (<HelpContentProject/>);
 }

}

export default Project;
