import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import MainMenu from "../components/MainMenu/MainMenu"
import Seo from "../components/seo"

import * as styles from "../styles/_index.module.scss"

const CategoryTemplate = ({data, children, pageContext}) => {
  
  const image = getImage(data.file.childImageSharp.gatsbyImageData)
  const directory = new RegExp(`${pageContext.directory}`)
  const nestedProjects = data.allFile.nodes.filter(node => directory.test(node.relativeDirectory))

  return (
    <>
      <MainMenu />
      <Layout>
        <GatsbyImage 
          image={image}
          alt="hairstyle"
          style={{width: "100%", maxHeight: "400px", marginBottom: "50px"}}
        />
        <div className={styles.container}>
          <h1 className={styles.categoryPageTitle}>{pageContext.directory}</h1>
          <div className={styles.categoryServicesGrid}>
            <div className={styles.categoryServicesList}>
              {nestedProjects.map(project => {
                return (
                  <div key={project.id}>
                    <Link to={`../${project.relativeDirectory.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()}`}>
                    <GatsbyImage                       
                      image={getImage(project.childMdx.frontmatter.header_image.childImageSharp.gatsbyImageData)}
                      alt={`${project.childMdx.frontmatter.title} service image`}
                    />
                    </Link>
                    <h4 className={styles.serviceTitle}>{project.childMdx.frontmatter.title}</h4>
                  </div>
                )
              })}
            </div>
            <div className={styles.serviceDescription}>
              {children}
            </div>

          </div>
        </div>
        
      </Layout>
    </>
  )
}

export const Head = ({pageContext}) => <Seo title={pageContext.directory} />

export default CategoryTemplate

export const query = graphql`
query ($directory: String!) {
  file(relativeDirectory: {eq: $directory}, extension: {eq: "jpg"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
  allFile(filter: {extension: {eq: "mdx"}, name: {eq: "project"}}) {
    nodes {
      childMdx {
        frontmatter {
          order
          title
          header_image {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1)
            }
          }
        }
      }
      relativeDirectory
      id
    }
  }
}
`
