/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/**
 * Create all the project pages.
 */
const createProjectPages = async (graphql, actions, reporter) => {
  const { createPage } = actions
  const getProjectsResult = await graphql(`
    {
      allSanityProject {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `)
  if (getProjectsResult.errors) {
    throw getProjectsResult.errors
  }
  const projects = getProjectsResult.data.allSanityProject.nodes || []
  projects.forEach((node) => {
    const path = `/project/${node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/project/project.tsx"),
      context: { id: node.id },
    })
  })
}

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions, reporter }) => {
  await createProjectPages(graphql, actions, reporter);
}