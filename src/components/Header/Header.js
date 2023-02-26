import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./_Header.module.scss"

const Header = () => {


  return (
    <div className={styles.header}>
      <div className={styles.background}></div>         
      <StaticImage 
        src="../../images/header_img_2.jpg"          
        alt="header" 
        className={styles.headerImage}
      />       
      <h1 className={styles.hero}>BEAUTY,<br></br> WELL-BEING<br></br> & COMMUNITY</h1>
    </div>
  )
}

export default Header