import React from 'react';
import JourneysBlueprintsProject from './JourneysBlueprintsProject';
import AccessibilityProject from './AccessibilityProject';
import StorytellingProject from './StorytellingProject';
import ContentPatternsProject from './ContentPatternsProject';
import BalancingFeedbackProject from './BalancingFeedbackProject';
import RoadmappingProject from './RoadmappingProject';

function Project(props) {
 const projectName = props.projectName;

 if (projectName === "Journeys & blueprints") {
     return (<JourneysBlueprintsProject/>);
 }
 
 else if (projectName === "Accessibility") {
     return (<AccessibilityProject/>);
 }
 
 else if (projectName === "Storytelling") {
     return (<StorytellingProject/>);
 }

 else if (projectName === "Content patterns") {
     return (<ContentPatternsProject/>);
 }
 
 else if (projectName === "Balancing feedback") {
     return (<BalancingFeedbackProject/>);
 }

 else if (projectName === "Roadmapping") {
     return (<RoadmappingProject/>);
 }

}

export default Project;
