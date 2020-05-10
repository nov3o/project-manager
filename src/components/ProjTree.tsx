import React, { FunctionComponent } from 'react';
import { Project } from '../actions/constants'
import { ProjElement } from './Project'


function ProjTreeElement(projects: Project[]): JSX.Element {
    const projectsList: JSX.Element[] = [];

    for( let prj of projects ){
        projectsList.push(ProjElement(prj));
    }

    return (
        <ul>
            {projectsList}
        </ul>
    )
}
