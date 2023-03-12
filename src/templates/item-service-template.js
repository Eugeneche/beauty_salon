import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import MainMenu from "../components/MainMenu/MainMenu"
import Seo from "../components/seo"

import * as styles from "../styles/_index.module.scss"

const ItemServiceTemplate = ({data, children, pageContext}) => {
  
  const image = getImage(data.mdx.frontmatter.header_image.childImageSharp.gatsbyImageData)

  const {body} = data.mdx

  //console.log(mdx)
  console.log(body)
  console.log(pageContext)
  //console.log(children)
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
          <h1>Service {pageContext.directory}</h1>
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
query ($mdxId: String!) {
  mdx(id: {eq: $mdxId}) {
    frontmatter {
      header_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    body
  }
}
`