import { Menu, Transition } from "@headlessui/react"
import React, { Fragment, type ReactElement } from "react"
import useCommon from "../hooks/useCommon"
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid"
import { Link } from "gatsby"
import _ from "lodash"
import {
  mobListItems,
  serviceListItems,
  menuButton,
  activeMenuItem
} from "./MobMenu.module.css"

// type MobMenuProps = NonNullable<IndexPageFrontmatterType>["MobMenu"]

const MobMenu = ({ open }: { open: boolean }): ReactElement => {
  const { header, services } = useCommon()
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div className={mobListItems}>
        <ul>
          <li>
            <Link
              to="/"
              style={{ color: "inherit" }}
              activeClassName={activeMenuItem}
            >
              Home
            </Link>
          </li>
          {header.navItems?.map((item, i) =>
            item?.item === "Services" ? (
              <Menu key={`menu-${i}`}>
                {({ open: serviceOpen }) => (
                  <>
                    <Menu.Button
                      as="li"
                      id="services"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#f2f2f2",
                        marginRight: "1.0625rem",
                      }}
                    >
                      Services{" "}
                      {/* <ChevronDownIcon
                        className={serviceOpen ? "rotate-down" : ""}
                        style={{ height: "18px", width: "18px" }}
                        aria-hidden="true"
                      /> */}
                      {serviceOpen ? (
                        <MinusIcon
                          style={{ height: "18px", width: "18px" }}
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusIcon
                          style={{ height: "18px", width: "18px" }}
                          aria-hidden="true"
                        />
                      )}
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div
                          style={{ paddingLeft: "2rem" }}
                          className={serviceListItems}
                        >
                          {services.map((item, i) => (
                            <Menu.Item as="li" key={`service-${i}`}>
                              {({ active }) => (
                                <Link
                                  to={`/services/${_.kebabCase(item)}`}
                                  style={{ color: "inherit" }}
                                  activeClassName={activeMenuItem}
                                >
                                  {item}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            ) : (
              <li key={`menu-${i}`}>
                <Link
                  to={item?.link!}
                  style={{ color: "inherit" }}
                  activeClassName={activeMenuItem}
                >
                  {item?.item}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      <a
        href="/contact"
        className={menuButton}
        style={{
          position: "fixed",
          marginBottom: "1.5rem",
          right: "0",
          left: "0",
          bottom: "0",
          marginRight: "1.0625rem",
          marginLeft: "1.0625rem",
        }}
      >
        Lets Talk
        <img src="/images/Button Icon.svg" alt="" />{" "}
      </a>
    </div>
  )
}

export default MobMenu
