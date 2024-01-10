import * as React from "react"

// type SolutionProps = { unknown }

const Solution = (): React.ReactElement => (
  <div className="solution">
    <div className="sleft">
      <img src="images/obejct.svg" alt="" />
    </div>
    <div className="sright">
      <h2>
        <span className="head1">Reach for</span>
        <span className="head2">Solution</span>
      </h2>
      <p>
        Get solutions for your business from the most innovative hands in tech.
      </p>
      <a href="#" className="Cbutton">
        Contact Now <img src="images/phone.svg" />
      </a>
    </div>
  </div>
)

export default Solution
