import * as React from "react"
import * as styles from "./_Footer.module.scss"
import logo from "../../images/logo_black.svg"

const Footer = () => {


  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerMenu}>
          <div className={styles.footerMenuColumn}>
            <img className={styles.logo} src={logo} alt="logo"></img>
            <p>© SOPHIE style 2020 - {new Date().getFullYear()}</p>
          </div>
          <div className={styles.footerMenuColumn}>
            <h4>Working Hours:</h4>
            <p>Monday - Friday</p>
            <p>09:00 - 21:00</p>
            <p>Saturday - Sunday</p>
            <p>10:00 - 20:00</p>
          </div>
          <div className={styles.footerMenuColumn}>
            <h4>Contacts:</h4>
            <p>+22 777 555 444<br></br>312 N Washington Ave St, Weatherford, 73096</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer