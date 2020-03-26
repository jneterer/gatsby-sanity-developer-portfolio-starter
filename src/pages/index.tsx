import React from "react"
import Layout from "../components/layout/layout"
import ProjectsSection from "../components/projects-section/projects-section"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProjectsSection />
  </Layout>
)

export default IndexPage
