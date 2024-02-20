import * as React from "react"
import useCommon from "../hooks/useCommon"
import { Link } from "gatsby"
import _ from "lodash"

type PropType = React.HTMLProps<HTMLDivElement>

const Footer = (props: PropType): React.ReactElement => {
  const { footer, services } = useCommon()

  return (
    <div className={`footer-container ${props.className}`}>
      <footer>
        <div className="footer-section">
          <div className="footer-column1">
            <img
              src="/images/Group 20.svg"
              alt="Website Logo"
              className="footer-logo"
            />
            <p>{footer.address}</p>
            <div className="footer-social">
              {footer.social?.map((el, i) => {
                const { link, icon } = el!
                return (
                  <a key={`footer-social-${i}`} href={link!} target="__blank">
                    <img src={icon!} alt="Social Media Icon" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="footer-column">
            {footer.columns?.map((col, index) => {
              const { heading, elements } = col!
              return (
                <div
                  key={`footer-column-${heading}`}
                  className={"footer-column" + (index + 2)}
                >
                  <div className="footer-heading">{heading}</div>
                  <ul className="footer-list">
                    {heading === "Services"
                      ? services?.map((el, i) => (
                          <li
                            key={`footer-list-item-${i}`}
                            className="footer-list-item"
                          >
                            <Link to={`/services/${_.kebabCase(el)}`}>
                              {el}
                            </Link>
                          </li>
                      ))
                      : elements?.map((el, i) => (
                          <li
                            key={`footer-list-item-${i}`}
                            className="footer-list-item"
                          >
                            <Link to={`${el?.link}`}>{el?.text}</Link>
                          </li>
                      ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2015-2023 Vibrant IT Solutions. All rights reserved.</p>
          <p id="fn">
            <Link to="/terms-and-conditions">Terms & Conditions</Link> | Privacy
            Policy | Cookie Preferences
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
