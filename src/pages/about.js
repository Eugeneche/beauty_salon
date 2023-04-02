import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MainMenu from "../components/MainMenu/MainMenu"

import * as styles from "../styles/_index.module.scss"

const About = ({data}) => {

  return (
    <>
      <MainMenu />
      <Layout>
        <StaticImage 
          src="../images/beauty_products.jpg"
          alt="hairstyle"
          height={400}
          style={{width: "100%", marginBottom: "50px"}}
        />

        <div className={[styles.container, styles.about].join(' ')}>
          <h1>About us</h1>

          <p>Welcome to Sophie, the premier beauty salon where we bring out the beauty in you. Our salon offers an array of services including hair cutting, hair styling, manicure, and pedicure. Our experienced team of professionals are passionate about making our clients look and feel their best.</p>
          <p>At Sophie, we understand the importance of looking and feeling great. We believe that every individual is unique, and our team of experts work with each client to create a customized beauty experience that is tailored to their needs. Whether you are looking for a simple haircut or a complete makeover, we have got you covered.</p>
          <p>Our hair services include hair cutting, coloring, styling, and treatments. We use only the highest quality hair products to ensure that your hair looks and feels its best. Our manicure and pedicure services are designed to pamper and revitalize your hands and feet. Our nail technicians use only the finest nail products to ensure that your nails look great and remain healthy.</p>
          <p>At Sophie, we are committed to providing our clients with the best possible service. We believe that every visit to our salon should be a relaxing and enjoyable experience. Our salon is designed to create a tranquil and comfortable environment where our clients can unwind and escape from the stresses of everyday life.</p>
          <p>We take great pride in our work and are dedicated to providing our clients with the highest level of customer service. Our team of experts are passionate about what they do, and it shows in the quality of our work.</p>
          <p>If you are looking for a beauty salon that offers the best in hair, nails, and beauty services, then look no further than Sophie. Contact us today to schedule an appointment and experience the difference that our salon can make in your life.</p>

        </div>
        <div className={styles.blog}>
          <div className={styles.container}>
            <StaticImage 
              src="../../data/blog/hairdresser.jpg"
              alt="hairdresser with client"
              className={styles.blogImageContainer}
              imgClassName={styles.blogImage}
            />
            <div className={styles.blogNews}>
              <h3>News & Deals</h3>

              {data.allFile.nodes.map(newsItem => {
                
                return (
                  <div key={newsItem.childMdx.id}>
                    <Link to={newsItem.childMdx.frontmatter.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").replace(/[","]/g, "").toLowerCase()}>
                      <h4>{newsItem.childMdx.frontmatter.title}</h4>                   
                    </Link>
                    <p className={styles.blogNewsDate}>{newsItem.childMdx.frontmatter.date}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
)}

export const Head = () => <Seo title="About us" />

export default About

export const query = graphql`
query {
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
}
`
