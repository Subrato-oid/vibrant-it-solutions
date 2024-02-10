import * as React from "react"
import DropMenu from "./DropMenu"
import useCommon from "../hooks/useCommon"
import { Link } from "gatsby"

// type DeskMenuProps = {
//   navItems: {
//     item: string
//     link: string
//   }[]
//   services: string[]
// }
const DeskMenu = (): React.ReactElement => {
  const { header, services } = useCommon()
  return (
    <>
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
              ) : (
                <Link to={el?.link!}>{el?.item}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default DeskMenu
