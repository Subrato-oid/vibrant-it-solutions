import React, { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Link } from "gatsby"
import _ from "lodash"

type DropMenuProps = {
  items: string[]
}
const DropMenu: React.FC<DropMenuProps> = ({ items }) => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className="dropdown-button"
            style={{ display: "flex", alignItems: "center" }}
          >
            Solutions
            <ChevronDownIcon
              className={open ? "rotate-down" : ""}
              style={{ height: "18px", width: "18px" }}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="dropdown-menu-transition enter"
            enterFrom="dropdown-menu-transition intial"
            enterTo="dropdown-menu-transition final"
            leave="dropdown-menu-transition leave"
            leaveFrom="dropdown-menu-transition final"
            leaveTo="dropdown-menu-transition intial"
          >
            <Popover.Panel>
              <div className="dropdown-menu">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    src="/images/Homepage/dropdown1.png"
                    style={{
                      height: "100%",
                      objectFit: "cover",
                      width: "45%",
                    }}
                  ></img>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: "1",
                      flexShrink: "0",
                      flexBasis: "1",
                    }}
                  >
                    {items.map((item, index) => (
                      <Link
                        to={`/services/${_.kebabCase(item)}`}
                        className="dropdown-item"
                        style={{ width: "100%", display: "inline-block" }}
                        key={index}
                      >
                        <li
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span>{item}</span>

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
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default DropMenu
