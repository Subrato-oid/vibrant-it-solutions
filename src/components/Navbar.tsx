import * as React from "react"

// type HeaderProps = { unknown }

const Navbar = (): React.ReactElement => (
  <header>
    <img src="/images/Group 20.svg" alt="Logo" />
    <nav>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Our Works</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
    <div className="ham">
      <div className="menu">
        <img src="/images/menu.svg" alt="" />
      </div>
      <div className="close">
        <img src="/images/x.svg" alt="" />
      </div>
    </div>
  </header>
)
export default Navbar
