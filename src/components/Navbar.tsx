import * as React from "react"
import useCommon from "../hooks/useCommon"
import { Link } from "gatsby"
import DropMenu from "./DropMenu"

const Navbar = (): React.ReactElement => {
  const { header, services, milestone } = useCommon()
  // TODO: User services list in header

  console.log(services)
  console.log(milestone)

  return (
    <header>
      <Link to="/">
        <img src={header.logo!} alt="Logo" />
      </Link>
      <nav>
        <ul>
          {header.navItems!.map((el) => (
            <li
              key={`navitem-${el!.item}`}
              style={{ display: "flex", alignItems: "center" }}
            >
              {el?.item === "Services" ? (
                // <Dropdown items={services} />
                <DropMenu items={services} />
              ) : el?.item === "Our Works" ? (
                <Link to="/works/tuple">{el.item}</Link>
              ) : el?.item === "Contact Us" ? (
                <Link to="/contact">{el.item}</Link>
              ) : (
                <Link to={`/${el!.item?.toLowerCase()}`}>{el!.item}</Link>
              )}
              {/* <a href={`/${el!.item?.toLowerCase()}`}>{el!.item}</a>
              {el?.item === "Services" && <Dropdown items={services} />} */}
            </li>
          ))}
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
}
export default Navbar
