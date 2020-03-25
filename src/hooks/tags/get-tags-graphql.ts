import { graphql, useStaticQuery } from "gatsby";
import { IGetTagsResponse } from "./iget-tags-response";

export const GetTagsGraphql = (): IGetTagsResponse => {
  const projectsAndTags: IGetTagsResponse = useStaticQuery(
    graphql`
      {
        allSanityTag(sort: {fields: title, order: ASC}) {
          nodes {
            _id
            title
            description
            selected
            isViewAll
          }
        }
      }
    `
  )
  return projectsAndTags;
}