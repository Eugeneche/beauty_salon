import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as styles from "./_MainMenu.module.scss"
import NavLink from "./NavLink"
import logo from "../../images/logo_black.svg"
import hamburger from "../../images/menu.svg"

const MainMenu = () => {

  const [isShow, setIsShow] = useState(false)

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

  return (
    <>
      <nav className={styles.desktopMenu}>
        <div className={styles.items}>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">about</NavLink>
          <div className={styles.services}>
            services
            <ul className={styles.servicesCategories}>
              {servicesCategories.map(cat => {
                const url = cat.relativeDirectory.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()
                return <li key={cat.relativeDirectory}><Link to={"/"+url}>{cat.relativeDirectory}</Link></li>
              })}
            </ul>
          </div>
          <NavLink to="/prices">prices</NavLink>
          <NavLink to="/contacts">contacts</NavLink>
        </div>
        <Link className={styles.logo} to="/"><img src={logo} alt="logo"></img></Link>
      </nav>
      
      <div className={styles.shadow} style={isShow ? {display: "block"} : {display: "none"}}>
        <nav className={styles.mobileMenuBackground}>
        <div className={styles.items}>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">about</NavLink>
          <div className={styles.services}>
            services
            <ul className={styles.servicesCategories}>
              {servicesCategories.map(cat => {
                const url = cat.relativeDirectory.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()
                return <li key={cat.relativeDirectory}><Link to={"/"+url}>{cat.relativeDirectory}</Link></li>
              })}
            </ul>
          </div>
          <NavLink to="/prices">prices</NavLink>
          <NavLink to="/contacts">contacts</NavLink>
        </div>
        <Link className={styles.logo} to="/"><img src={logo} alt="logo"></img></Link>
        </nav>
      </div>

      <nav className={styles.mobileMenu}>
        <Link className={styles.logo} to="/"><img src={logo} alt="logo"></img></Link>
        <img src={hamburger} alt="hamburger menu icon"></img>
      </nav>
    </>
  )
}

export default MainMenu