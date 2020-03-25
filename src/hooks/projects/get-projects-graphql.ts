import { graphql, useStaticQuery } from "gatsby";
import { IGetProjectsResponse } from "../../contracts/projects/iget-projects-response";

export const GetAllProjects = () => {
  const projects: IGetProjectsResponse = useStaticQuery(
    graphql`
      query {
        allSanityProject {
          nodes {
            _id
            title
            description
            tags {
              _id
              title
            }
          }
        }
      }
    `
  )
  return projects;
}