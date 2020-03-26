import { IProject } from "./project/iproject";

export interface IGetProjectsResponse {
  allSanityProject: {
    nodes: IProject[];
  };
}