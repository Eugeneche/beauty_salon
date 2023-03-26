import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MainMenu from "../components/MainMenu/MainMenu"

import * as styles from "../styles/_index.module.scss"

const Prices = ({data}) => {
  

  const listOfServices = data.file.childrenPriceXlsxServices
  const typesOfServices =  Array.from(new Set(listOfServices.map((obj) => obj.Type)))

  return (
    <>
      <MainMenu />
      <Layout>
        <StaticImage 
          src="../images/prices_page.jpg"
          alt="hairstyle"
          height={500}
          style={{width: "100%", marginBottom: "50px"}}
        />

        <div className={[styles.container, styles.prices].join(' ')}>
          <h1>Prices</h1>
          {typesOfServices.map(type => {
            
            return (
              <div className={styles.blockType} key={type}>
                <h3>{type}</h3>
                <ul className={styles.typeOfServices}>
                  {listOfServices.map(service => {

                    if (service.Type === type) {
                      return (
                        <li className={styles.service} key={service.id}><span>{service.Service}</span><span>{service.Price}</span></li>
                      )
                    }
                  })}
                </ul>
              </div>
              )
            })
          }
        </div>
      </Layout>
    </>
)}

export const Head = () => <Seo title="Prices" />

export default Prices

export const query = graphql`
  query {
    file(name: {eq: "price"}, sourceInstanceName: {eq: "promo"}) {
      childrenPriceXlsxServices {
        Price
        Service
        Type
        id
      }
    }
  }
`
