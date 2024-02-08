import * as React from "react"
import DropMenu from "./DropMenu"
import { Link } from "gatsby"
import useCommon from "../hooks/useCommon"

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
                <Link style={{ color: "inherit" }} to={el?.link!}>
                  {el?.item}
                </Link>
              )}
              {/* <a href={`/${el!.item?.toLowerCase()}`}>{el!.item}</a>
              {el?.item === "Services" && <Dropdown items={services} />} */}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default DeskMenu
