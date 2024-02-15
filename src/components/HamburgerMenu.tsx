import React, { type ReactElement } from "react"

const HamburgerMenu = (): ReactElement => {
  return (
    <div className="hamburger-menu">
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"> </div>
    </div>
  )
}

export default HamburgerMenu
