import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as styles from "./_MainMenu.module.scss"
import NavLink from "./NavLink"
import logo from "../../images/logo_black.svg"
import hamburger from "../../images/menu.svg"
import close from "../../images/close.svg"

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
      
      <div className={styles.mobileMenuShadow} style={isShow ? {display: "block"} : {display: "none"}}>
        <nav className={styles.mobileMenuBackground}>
          <button onClick={() => setIsShow(false)}>
            <img className={styles.close} src={close} alt="close menu icon"></img>
          </button>
          <Link onClick={() => setIsShow(false)} className={styles.logo} to="/"><img src={logo} alt="logo"></img></Link>
          <div className={styles.items}>
            <Link onClick={() => setIsShow(false)} className={styles.item} to="/">HOME</Link>
            <Link onClick={() => setIsShow(false)} className={styles.item} to="/about">about</Link>
            <div className={styles.services}>

              
              {servicesCategories.map(cat => {
                const url = cat.relativeDirectory.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()
                return <Link onClick={() => setIsShow(false)} key={cat.relativeDirectory} className={styles.subItem} to={"/"+url}>
                    {cat.relativeDirectory}
                  </Link>
              })}
              
            </div>
            <Link onClick={() => setIsShow(false)} className={styles.item} to="/prices">prices</Link>
            <Link onClick={() => setIsShow(false)} className={styles.item} to="/contacts">contacts</Link>
          </div>         
        </nav>
      </div>

      <nav className={styles.mobileMenu}>
        <Link className={styles.logo} to="/"><img src={logo} alt="logo"></img></Link>
        <button onClick={() => setIsShow(true)} className={styles.hamburger}><img src={hamburger} alt="hamburger menu icon"></img></button>
      </nav>
    </>
  )
}

export default MainMenu