import { graphql } from "gatsby";
import React from "react";

const Project = ({ data }) => {
  return <p>{JSON.stringify(data)}</p>
}

export default Project

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    sanityProject(id: {eq: $id}) {
      title
      mainImage {
        asset {
          url
        }
      }
    }
  }
`