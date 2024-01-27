import * as React from "react"
import { ourMission } from "./Mission.module.css"

// type MissionProps = NonNullable<IndexPageFrontmatterType>["Mission"]

const Mission = (): React.ReactElement => (
  <div className={ourMission}>
    <h2>Our Mission</h2>
    <p>
      Our mission is to help businesses in adopting new technologies more
      efficiently, resolve complex challenges that arise during digital
      expansion, IT consulting, and consistently generate fresh ideas.
      <br></br>
      Whether it's developing an app for the general public or implementing a
      comprehensive solution for large enterprises, we guide you throughout the
      entire process, from ideation to completion.
    </p>
  </div>
)

export default Mission
