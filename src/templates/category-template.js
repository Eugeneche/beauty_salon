import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import MainMenu from "../components/MainMenu/MainMenu"
import Seo from "../components/seo"

import * as styles from "../styles/_index.module.scss"

const CategoryTemplate = ({data, children, pageContext}) => {
  
  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  console.log(data)
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
          <h1>Category {pageContext.directory}</h1>
          <div className={styles.categoryServicesGrid}>
            <div className={styles.serviceList}>

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

export const Head = () => <Seo title="Using DSG" />

export default CategoryTemplate

export const query = graphql`
query ($directory: String!) {
  file(relativeDirectory: {eq: $directory}, extension: {eq: "jpg"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
}
`
