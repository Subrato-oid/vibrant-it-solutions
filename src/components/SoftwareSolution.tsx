import React from "react"
import {
  softwareSolution,
  line1,
  line2,
  button,
  softwareDev
} from "./SoftwareSolution.module.css"

// type SoftwareSolution = {}

const SoftwareSolution = (): React.ReactElement => (
  <div className={softwareSolution}>
    <h1>
      <span className={line1}>Excellent</span>&nbsp;
      <span className={line2}>App Development</span>&nbsp;
      <span className={line1}>Solutions</span>
    </h1>
    <p>
      We offer end-to-end development that involves everything from business
      analysis to software delivery and support. We are there for you to help
      plan, design, develop, integrate, test, manage, and evolve software
      solutions.
    </p>
    <a href="#" className={button}>
      Book A Consultation <img src="/images/Button Icon.svg" alt="" />{" "}
    </a>
    <img src="/images/services/AD.svg" alt="" id={softwareDev} />
  </div>
)

export default SoftwareSolution
