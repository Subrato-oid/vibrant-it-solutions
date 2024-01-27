import * as React from "react"

// type JobOpeningProps = NonNullable<IndexPageFrontmatterType>["JobOpening"]

const JobOpening = (): React.ReactElement => (
  <div className={"job-opening"}>
    <h2>
      <span className={"head2"}>Job</span>
      <span className={"head1"}>Openings</span>
    </h2>
    <div className={"post"}>
      <div className={"role"}>
        <h4>Front-End Developer</h4>
        <p>Learn by developing meaningful products</p>
        <img src="media/Career/arrow-right.svg" alt="" />
      </div>
      <div className={"role"}>
        <h4>UX/UI Designer</h4>
        <p>Grow as a designer that design schools doesn’t teach you</p>
        <img src="media/Career/arrow-right.svg" alt="" />
      </div>
      <div className={"role"} id={"last-post"}>
        <h4>Software Tester</h4>
        <p>Grow as a designer that design schools doesn’t teach you</p>
        <img src="media/Career/arrow-right.svg" alt="" />
      </div>
    </div>
  </div>
)

export default JobOpening
