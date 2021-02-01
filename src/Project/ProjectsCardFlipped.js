import React from 'react';

import {ProjectFlipped} from "./ProjectElements"

export const ProjectsCardFlipped = ({buttonLabel, buttonLabelTwo}) => {
    return (
        <ProjectFlipped>
            <button><a target="_blank" href={buttonLabel}> View </a></button>
            <button><a target="_blank" href={buttonLabelTwo}> GIT </a> </button>
        </ProjectFlipped>
    )
}


export default ProjectsCardFlipped;
