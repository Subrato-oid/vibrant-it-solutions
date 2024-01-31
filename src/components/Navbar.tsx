import * as React from "react"
import useCommon from "../hooks/useCommon"

const Navbar = (): React.ReactElement => {
  const { header, services } = useCommon()
  // TODO: User services list in header
  console.log(services)

  return (
    <header>
      <img src={header.logo!} alt="Logo" />
      <nav>
        <ul>
          {header.navItems!.map((el) => (
            <li key={`navitem-${el!.item}`}>
              <a href={`/${el!.item?.toLowerCase()}`}>{el!.item}</a>
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
