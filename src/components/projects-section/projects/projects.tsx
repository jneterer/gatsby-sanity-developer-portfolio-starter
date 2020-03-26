import React, { FunctionComponent } from "react";
import { IProjectsProps } from '../../../contracts/projects/iprojects-props';
import { IProject } from "../../../contracts/projects/project/iproject";
import Project from "./project/project";
import "./projects.scss";

const Projects: FunctionComponent<IProjectsProps> = ({ projects }) => {
  return <div className="projects-container">
    {
      projects.map((project: IProject) => <Project key={project._id} project={{...project}} />)
    }
  </div> 
}

export default Projects