import React from 'react';
import ContentGuidanceProject from './ContentGuidanceProject';
import DesignSysProject from './DesignSysProject';
import ContentFilteringProject from './ContentFilteringProject';
import HelpContentProject from './HelpContentProject';

function Project(props) {
 const projectName = props.projectName;

 if (projectName === "Content guidance") {
     return (<ContentGuidanceProject/>);
 }
 
 else if (projectName === "Design systems") {
     return (<DesignSysProject/>);
 }

 else if (projectName === "Content filtering") {
     return (<ContentFilteringProject/>);
 }

 else if (projectName === "Help content") {
     return (<HelpContentProject/>);
 }

}

export default Project;