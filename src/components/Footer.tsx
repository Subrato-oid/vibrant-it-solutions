import * as React from "react"
import useCommon from "../hooks/useCommon"
const Footer = (): React.ReactElement => {
  const { footer } = useCommon()
  return (
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
                  {elements?.map((el, i) => (
                    <li
                      key={`footer-list-item-${i}`}
                      className="footer-list-item"
                    >
                      {el?.text}
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
        <p id="fn">Terms & Conditions | Privacy Policy | Cookie Preferences</p>
      </div>
    </footer>
  )
}

export default Footer
