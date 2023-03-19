import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import MainMenu from "../components/MainMenu/MainMenu"
import Seo from "../components/seo"

import * as styles from "../styles/_index.module.scss"

const ItemServiceTemplate = ({data, children, pageContext}) => {
  
  const image = getImage(data.mdx.frontmatter.header_image.childImageSharp.gatsbyImageData)
  const subservices = data.allFile.nodes || null

  //console.log(subservices)

  //console.log(children)
  console.log(pageContext.mdxId)
  console.log(pageContext.directory)
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
          <h1>Service {pageContext.frontmatter.title}</h1>
          <div className={styles.subservicesGrid}>
            {subservices && 
              subservices.map(subservice => {
                console.log(subservice)
                return (
                  <div key={subservice.id} className={styles.subserviceItem}>                    
                    <GatsbyImage 
                      image={getImage(subservice.childImageSharp.gatsbyImageData)}
                      alt={`${subservice.name} image`}
                    />
                    <h3 className={styles.subserviceName}>{subservice.name}</h3>
                  </div>
                )
              })
            }
          </div>
          <div className={styles.serviceDescription}>
            {children}
          </div>
        </div>
      </Layout>
    </>
  )
}

export const Head = () => <Seo title="Using DSG" />

export default ItemServiceTemplate

export const query = graphql`
query ($mdxId: String!, $directory: String!) {
  mdx(id: {eq: $mdxId}) {
    frontmatter {
      header_image {
        childImageSharp {
          gatsbyImageData
        }
      }
      order
      title
      subservices
    }
    body
  }
  allFile(
    filter: {extension: {eq: "jpg"}, relativeDirectory: {eq: $directory}, name: {ne: "header"}}
  ) {
    nodes {
      name
      id
      childImageSharp {
        gatsbyImageData(aspectRatio: 1)
      }
    }
  }
}
`