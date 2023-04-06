import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/_index.module.scss"
import MainMenu from "../components/MainMenu/MainMenu"
import Header from "../components/Header/Header"

import hair from "../images/hair.png"
import nails_polish from "../images/nails_polish.png"
import barbershop from "../images/barbershop.png"



const IndexPage = (data) => {
  
  const promoDateRange = data.data.allPrXlsxPromo.nodes[0]
  const promoPoints = data.data.allPrXlsxPromo.nodes.filter((el, i) => i !== 0)
  
  return (
    <>
      <MainMenu />
      <Header />
      <Layout>
        
        <div  className={styles.container}>
          <div className={styles.servicesIcons}>
            <div className={styles.serviceIcon}>
              <img src={hair} alt="hair"></img>
              <h4>Hair styling</h4>
              <p>Transform Your Look with Expert Hair Styling Services. We've Got You Covered.</p>
            </div>
            <div className={styles.serviceIcon}>
              <img src={nails_polish} alt="nails"></img>
              <h4>Nail treatments</h4>
              <p>Pamper Your Nails with Our Luxurious Treatments. From Manicures to Pedicures. Book now!</p>
            </div>
            <div className={styles.serviceIcon}>
              <img src={barbershop} alt="barbershop"></img>
              <h4>Barbershop</h4>
              <p>Get the Perfect Cut and Style at Our Barbershop. From Classic to Modern, We Cater to All.</p>
            </div>
          </div>

          <div className={styles.servicesImages}>
            <div className={styles.serviceImageItem}>
              <Link to="/makeup/">
                <StaticImage 
                  className={styles.serviceImage}
                  src="../images/makeup.jpg"
                  alt="make up"
                  aspectRatio={1/1}
                  layout="fullWidth"
                />
              </Link>
              <Link to="/makeup/"><h3>Make up</h3></Link>
            </div>
            <div className={styles.serviceImageItem}>
              <Link to="/lashes-and-brows/eyelash-extensions/">
                <StaticImage 
                  className={styles.serviceImage}
                  src="../images/eyelash_extensions.jpg"
                  alt="Eyelash Extensions"
                  aspectRatio={1/1}
                  layout="fullWidth"
                />
              </Link>
              <Link to="/lashes-and-brows/eyelash-extensions/"><h3>Eyelash Extensions</h3></Link>
            </div>
            <div className={styles.serviceImageItem}>
              <Link to="/skin-treatment/">
                <StaticImage 
                  className={styles.serviceImage}
                  src="../images/skin_treatment.jpg"
                  alt="skin treatment"
                  aspectRatio={1/1}
                  layout="fullWidth"
                />
              </Link>
              <Link to="/skin-treatment/"><h3>Skin treatment</h3></Link>
            </div>
            <div className={styles.serviceImageItem}>
              <Link to="/nail-bar/pedicure/">
                <StaticImage 
                  className={styles.serviceImage}
                  src="../images/pedicure.jpg"
                  alt="pedicure"
                  aspectRatio={1/1}
                  layout="fullWidth"
                />
              </Link>
              <Link to="/nail-bar/pedicure/"><h3>Pedicure</h3></Link>
            </div>
          </div>
        </div>

        <div className={styles.promo}>         
          <div className={styles.promoBackground}>
          </div>

          <StaticImage 
            className={styles.promoPhoto}
            src="../images/hairstyle.jpg"
            alt="hairstyle"
            imgStyle={{height: "fitContent", objectFit: "cover"}}
            /* height={700} */
          />
          <div className={styles.promoInfo}>
            <h3>Special offers</h3>
            <div className={styles.promoPeriod}>promotion period: {promoDateRange.Time_range}</div>
            {/* <div className={styles.servicesGrid}> */}
              {promoPoints.map(point => {
                return (
                  <div className={styles.promoServicesGrid} key={point.id}>
                    <div className={styles.promoService}>{point.Service}</div>
                    <div className={styles.promoRegularPrice}>{point.Regular_price}</div>
                    <div className={styles.promoCurrentPrice}>{point.Current_price}</div>
                  </div>
                )
              })}
            {/* </div> */}
          </div>
        </div>
      </Layout>
    </>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 * 
 * 
 */


export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allPrXlsxPromo {
      nodes {
        Current_price
        Regular_price
        Service
        Time_range
        id
      }
    }
  }
`