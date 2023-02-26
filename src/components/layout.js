import * as React from "react"
import Footer from "./Footer/Footer"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>     
      <main>{children}</main>
      <Footer />     
    </>
  )
}

export default Layout
