import * as React from "react"
import * as styles from "./_MainMenu.module.scss"
import NavLink from "./NavLink"
import logo from "../../images/logo_black.svg"

const MainMenu = () => {


  return (
    <nav>
      <div className={styles.items}>
          <NavLink className={styles.item} to="/">HOME</NavLink>
          <NavLink className={styles.item} to="/about">about</NavLink>
          <div className={styles.item}>services</div>
          <NavLink className={styles.item} to="/contacts">contacts</NavLink>
      </div>
      <img className={styles.logo} src={logo} alt="logo"></img>
    </nav>
  )
}

export default MainMenu