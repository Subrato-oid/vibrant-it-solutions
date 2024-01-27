import * as React from "react"
import { applyNow, head1, head2, line, apply, button } from "./Apply.module.css"

// type ApplyProps = NonNullable<IndexPageFrontmatterType>["Apply"]

const Apply = (): React.ReactElement => (
  <div className={applyNow}>
    <h2>
      <span className={head1}>Okay Enough About Us,</span> <br />
      <span className={head1}> Let's Talk</span>
      <span className={head2}>About You</span>
    </h2>
    <div className={line}></div>
    <div className={apply}>
      <h3>Apply Now</h3>
      <p>
        We'd love to hear your story and see what you and your past work are
        made of to see if we're the right fit for you.
      </p>
      <a href="#" className={button}>
        Email your portfolio
        <img src="media/Button Icon.svg" />
      </a>
    </div>
  </div>
)

export default Apply
