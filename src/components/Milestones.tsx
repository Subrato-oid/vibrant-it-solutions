import * as React from "react"
import {
  milestones,
  head1,
  head2,
  boxes,
  sbox,
  sbox1
} from "./Milestones.module.css"

// type MilestonesProps = NonNullable<IndexPageFrontmatterType>["Milestones"]

const Milestones = (): React.ReactElement => (
  <div className={milestones}>
    <h2>
      <span className={head1}>Vibrant IT’s</span>
      <span className={head2}>Milestones</span>
    </h2>
    <p>
      Explore the friendly face of our stats. From project success rates to
      client satisfaction, our numbers tell a story of innovation, reliability,
      and exceptional IT solutions.
    </p>
    <div className={boxes}>
      <div className={sbox} id={sbox1}>
        <h1>40+</h1>
        <p>Employees</p>
      </div>
      <div className={sbox}>
        {" "}
        <h1>12</h1>
        <p>Years in IT</p>
      </div>
      <div className={sbox}>
        {" "}
        <h1>20+</h1>
        <p>Mobile Apps</p>
      </div>
      <div className={sbox}>
        {" "}
        <h1>350+</h1>
        <p>Success Stories</p>
      </div>
    </div>
  </div>
)

export default Milestones
