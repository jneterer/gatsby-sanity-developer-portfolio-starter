import { IProject } from "./iproject";

export interface IGetProjectsResponse {
  allSanityProject: {
    nodes: IProject[];
  };
}