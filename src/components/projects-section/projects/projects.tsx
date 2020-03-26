import React, { FunctionComponent } from "react";
import { IProjectsProps } from '../../../contracts/projects/iprojects-props';
import { IProject } from "../../../contracts/projects/project/iproject";
import Project from "./project/project";
import "./projects.scss";

const Projects: FunctionComponent<IProjectsProps> = ({ projects }) => {
  return <div className="projects-container">
    {
      projects.length > 0 ?
        projects.map((project: IProject) => <Project key={project._id} project={{...project}} />)
        :
        <p className="no-results">No projects with the current set of selected tags.</p>
    }
  </div> 
}

export default Projects