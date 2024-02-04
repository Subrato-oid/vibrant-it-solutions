import React, { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Link } from "gatsby"
import _ from "lodash"

type ExampleProps = {
  items: string[]
}
const Example: React.FC<ExampleProps> = ({ items }) => {
  return (
    <Popover className="relative">
      <Popover.Button className="dropdown-button">
        <span>Solutions</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
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
              >
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "55vw",
                  }}
                >
                  {items.map((item, index) => (
                    <li key={index} className="dropdown-item">
                      <Link to={`/services/${_.kebabCase(item)}`}>{item}</Link>
                      <img
                        className="dropdown-arrow"
                        src="/images/down-right 1.svg"
                        width={1}
                        height={1}
                        alt="down-arrow"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Example
