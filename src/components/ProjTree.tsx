import React, {Component} from 'react';
import { Project } from '../actions/constants'
import { ProjElement } from './Project'
import {ProjectsState} from "../reducers/states";


interface ProjProps {
    projects: Project[]
}

class ProjTreeElement extends Component<ProjProps, ProjectsState> {
    constructor(props: ProjProps) {
        super(props);
    }

    render(): JSX.Element {
        const projectsList: JSX.Element[] = [];

        for (let prj of this.props.projects) {
            projectsList.push(ProjElement(prj));
        }

        return (
            <ul>
                {projectsList}
            </ul>
        )
    }
}

export default ProjTreeElement;