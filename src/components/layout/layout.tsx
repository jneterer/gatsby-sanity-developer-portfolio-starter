/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Header from "../header/header"
import IconEmail from "../icons/icon-email"
import IconGithub from "../icons/icon-github"
import IconTwitter from "../icons/icon-twitter"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <div className="main-content-container">
        <main>{children}</main>
        <footer>
          <a href="https://twitter.com/jacobneterer" target="_blank" className="twitter-icon-container" ><IconTwitter /></a>
          <a href="https://github.com/jneterer" target="_blank" ><IconGithub /></a>
          <a href="mailto:jacobrneterer@gmail.com" ><IconEmail /></a>
          <h2>Built by <a href="https://jacobneterer.com" target="_blank">Jacob Neterer</a></h2>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
