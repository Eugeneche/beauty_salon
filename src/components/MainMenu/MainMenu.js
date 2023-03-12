import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as styles from "./_MainMenu.module.scss"
import NavLink from "./NavLink"
import logo from "../../images/logo_black.svg"

const MainMenu = () => {

  const data = useStaticQuery(graphql`
    query getCategoriesForMenu {
      allFile(
        filter: {sourceInstanceName: {eq: "categories"}, name: {eq: "category"}}
      ) {
        nodes {
          relativeDirectory
        }
      }
    }
  `)

  const servicesCategories = data.allFile.nodes

  //console.log(servicesCategories)

  return (
    <nav>
      <div className={styles.items}>
          <NavLink className={styles.item} to="/">HOME</NavLink>
          <NavLink className={styles.item} to="/about">about</NavLink>
          <div className={styles.services}>
            services
            <ul className={styles.servicesCategories}>
              {servicesCategories.map(cat => {
                const url = cat.relativeDirectory.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()
                return <li key={cat.relativeDirectory} className={styles.category}><Link to={"/"+url}>{cat.relativeDirectory}</Link></li>
              })}
            </ul>
          </div>
          <NavLink className={styles.item} to="/contacts">contacts</NavLink>
      </div>
      <img className={styles.logo} src={logo} alt="logo"></img>
    </nav>
  )
}

export default MainMenu