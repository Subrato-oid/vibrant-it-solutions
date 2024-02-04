import React, { useState } from "react"
import _ from "lodash"
import { Link } from "gatsby"

type DropdownProps = {
  items: string[]
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter: () => void = () => {
    setIsOpen(true)
  }

  const handleMouseLeave: () => void = () => {
    setIsOpen(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="dropdown-container"
    >
      <button className="dropdown-button">Services</button>
      {isOpen && (
        <div className="dropdown-menu">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                width: "45vw",
                height: "100%",
                padding: "10px",
                backgroundImage:
                  "url(" + "/images/Homepage/dropdown1.png" + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                width: "55vw",
              }}
            >
              {items.map((item, index) => (
                <Link
                  key={index}
                  activeClassName="dropdown-item"
                  to={`/services/${_.kebabCase(item)}`}
                >
                  <li className="dropdown-item">
                    {item}
                    <img
                      className="dropdown-arrow"
                      src="/images/down-right 1.svg"
                      width={1}
                      height={1}
                      alt="down-arrow"
                    />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
