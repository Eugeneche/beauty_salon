/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const { createFilePath } = require('gatsby-source-filesystem')
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode })
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query getCategoriesForPage {
      allFile(filter: {sourceInstanceName: {eq: "categories"}, name: {eq: "category"}}) {
        nodes {
          relativeDirectory
          id
          childMdx {
            id
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)

  const projects = await graphql(`
  query getProject {
    allFile(filter: {sourceInstanceName: {eq: "categories"}, name: {eq: "project"}}) {
      nodes {
        relativeDirectory
        id
        childMdx {
          id
          internal {
            contentFilePath
          }
        }
      }
    }
  }
  `)

  //console.log(data) 
  //console.log(projects) 

  data?.allFile?.nodes?.forEach(category => {

    const directory = category.relativeDirectory
    const mdxId = category.childMdx.id
    const categoryUrl = category.relativeDirectory.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()
    const categoryTemplate = path.resolve(`./src/templates/category-template.js`)
    actions.createPage({
        path: categoryUrl,
        component: `${categoryTemplate}?__contentFilePath=${category.childMdx.internal.contentFilePath}`,
        context: { directory, mdxId }
      })
  })

    projects?.data?.allFile?.nodes?.forEach(project => {

    const directory = project.relativeDirectory
    const mdxId = project.childMdx.id
    const modifiedSlug = project.relativeDirectory.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()
    const projectTemplate = path.resolve(`./src/templates/item-service-template.js`)
    actions.createPage({
      path: modifiedSlug,
      component: `${projectTemplate}?__contentFilePath=${project.childMdx.internal.contentFilePath}`,
      context: { directory, mdxId }
    })
  })
}
