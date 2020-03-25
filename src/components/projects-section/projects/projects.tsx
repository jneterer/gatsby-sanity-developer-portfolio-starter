import React, { FunctionComponent } from "react";
import { IProject } from "../../../contracts/projects/iproject";
import { IProjectProps } from '../../../contracts/projects/iproject-props';

const Projects: FunctionComponent<IProjectProps> = ({ projects }) => {
  return <div>
    {
      projects.map((project: IProject) => {
        return <p key={project._id}>{project.title}</p>
      })
    }
  </div>;
}

export default Projects