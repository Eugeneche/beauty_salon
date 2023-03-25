import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import MainMenu from "../components/MainMenu/MainMenu"
import Seo from "../components/seo"

import * as styles from "../styles/_index.module.scss"

const CategoryTemplate = ({data, children, pageContext}) => {

  console.log(pageContext)
  console.log(data)
  return (
    <>
      <MainMenu />
      <Layout>
        <GatsbyImage 
          image={getImage(data.file.childImageSharp.gatsbyImageData)}
          alt="hairstyle"
          height={400}
          style={{width: "100%", marginBottom: "50px"}}
        />
        <div className={styles.container}>
          <h1>{data.mdx.frontmatter.title}</h1>
          <div className={styles.news}>
            <GatsbyImage 
              image={getImage(data.mdx.frontmatter.image.childImageSharp.gatsbyImageData)}
              alt={`${data.mdx.frontmatter.title} image`}
              height={400}
              style={{width: "100%", marginBottom: "50px"}}
            />
            <div>{children}</div>           
          </div>
        </div> 
      </Layout>
    </>
  )
}

export const Head = () => <Seo title="News" />

export default CategoryTemplate

export const query = graphql`
query ($mdxId: String!) {
  allFile(filter: {sourceInstanceName: {eq: "blog"}, extension: {eq: "mdx"}}) {
    nodes {
      childMdx {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        internal {
          contentFilePath
        }
      }
    }
  }
  file(sourceInstanceName: {eq: "blog"}, name: {eq: "header"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
  mdx(id: {eq: $mdxId}) {
    frontmatter {
      title
      date
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`
