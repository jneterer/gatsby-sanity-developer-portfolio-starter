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
            slug {
              current
            }
            tags {
              _id
              title
            }
            mainImage {
              asset {
                fluid(maxWidth: 1200) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    `
  )
  return projects;
}