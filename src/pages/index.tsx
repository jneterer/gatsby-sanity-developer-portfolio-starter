import React from "react"
import Layout from "../components/layout/layout"
import ProjectsSection from "../components/projects-section/projects-section"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ProjectsSection />
  </Layout>
)

export default IndexPage
