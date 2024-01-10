import * as React from "react"
import "../styles/global.css"

// type FooterProps = { unknown }

const Footer = (): React.ReactElement => (
  <footer>
    <div className="footer-section">
      <div className="footer-column1">
        <img
          src="images/Group 20.svg"
          alt="Website Logo"
          className="footer-logo"
        />
        <p>1/301 Vikrant Khand, Gomti Nagar, Lucknow 201307, India</p>
        <div className="footer-social">
          <a href="#">
            <img src="images/insta.svg" alt="Social Media Icon" />
          </a>
          <a href="#">
            <img src="images/twitter.svg" alt="Social Media Icon" />
          </a>
          <a href="#">
            <img src="images/fb.svg" alt="Social Media Icon" />
          </a>
        </div>
      </div>

      <div className="footer-column">
        <div className="footer-column2">
          <div className="footer-heading">Company</div>
          <ul className="footer-list">
            <li className="footer-list-item">About Us</li>
            <li className="footer-list-item">Contact</li>
            <li className="footer-list-item">Clients</li>
          </ul>
        </div>

        <div className="footer-column3">
          <div className="footer-heading">Services</div>
          <ul className="footer-list">
            <li className="footer-list-item">Software Development</li>
            <li className="footer-list-item">Web Development</li>
            <li className="footer-list-item">IT Outsourcing</li>
            <li className="footer-list-item">Software Testing</li>
            <li className="footer-list-item">IVRS and QSMS</li>
            <li className="footer-list-item">Mobile App Development</li>
            <li className="footer-list-item">E-Commerce Solutions</li>
            <li className="footer-list-item">Foodtech Service</li>
          </ul>
        </div>

        <div className="footer-column4">
          <div className="footer-heading">Products</div>
          <ul className="footer-list">
            <li className="footer-list-item">Easy Invoice Generator</li>
            <li className="footer-list-item">Pharma X</li>
            <li className="footer-list-item">GST Billing POS</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2015-2023 Vibrant IT Solutions. All rights reserved.</p>
      <p id="fn">Terms & Conditions | Privacy Policy | Cookie Preferences</p>
    </div>
  </footer>
)

export default Footer
