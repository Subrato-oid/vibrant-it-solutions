import { Menu, Transition } from "@headlessui/react"
import * as React from "react"
import useCommon from "../hooks/useCommon"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

// type MobMenuProps = NonNullable<IndexPageFrontmatterType>["MobMenu"]

const MobMenu = ({ open }: { open: boolean }): React.ReactElement => {
  const { services } = useCommon()
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div className="list-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <Menu>
            {({ open: serviceOpen }) => (
              <>
                <Menu.Button
                  as="li"
                  id="services"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Services{" "}
                  <ChevronDownIcon
                    className={serviceOpen ? "rotate-down" : ""}
                    style={{ height: "18px", width: "18px" }}
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div style={{ paddingLeft: "2rem" }} className="list-items">
                      {services.map((item, i) => (
                        <Menu.Item as="li" key={`service-${i}`}>
                          {({ active }) => (
                            <button
                              style={{
                                border: "none",
                                background: "unset",
                                color: "#f2f2f2",
                              }}
                              className={`${
                                active
                                  ? "bg-violet-500 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {item}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
          <li>Our Work</li>
          <li>Clients</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <a href="#" className="button">
        Lets Talk
        <img src="/images/Button Icon.svg" alt="" />{" "}
      </a>
    </div>
  )
}

export default MobMenu
