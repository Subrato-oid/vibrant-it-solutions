import React from "react"
import {
  RPsection,
  line2,
  RSlide,
  RleftSection,
  subheading,
  paragraph,
  viewProject,
  projectImage
} from "./Projects.module.css"

// type ProjectProp = {}

const Project = (): React.ReactElement => (
  <div className={RPsection}>
    <h2>
      Recent <span className={line2}>Software Development</span> projects
    </h2>
    <div className={RSlide}>
      <div className={RleftSection}>
        <div>
          <h3 className={subheading}>Wonde</h3>
          <p className={paragraph}>
            We're more than an IT Solutions Company; we infuse every project
            with passion and purpose.
          </p>
          <span className={viewProject}>
            View Project <img src="/images/arrow-right.svg" alt="" />
          </span>
        </div>
        <img
          src="/images/softwareDev/Frame 71.svg"
          alt="Image 1"
          className={projectImage}
        />
      </div>
      <div className={RleftSection}>
        <div>
          <h3 className={subheading}>Termgrid</h3>
          <p className={paragraph}>
            We're more than an IT Solutions Company; we infuse every project
            with passion and purpose.
          </p>
          <span className={viewProject}>
            View Project <img src="/images/arrow-right.svg" alt="" />
          </span>
        </div>
        <img
          src="/images/softwareDev/Frame 74.svg"
          alt="Image 2"
          className={projectImage}
        />
      </div>
      <div className={RleftSection}>
        <div>
          <h3 className={subheading}>Descartes</h3>
          <p className={paragraph}>
            We're more than an IT Solutions Company; we infuse every project
            with passion and purpose.
          </p>
          <span className={viewProject}>
            View Project <img src="/images/arrow-right.svg" alt="" />
          </span>
        </div>
        <img
          src="/images/softwareDev/Frame 76.svg"
          alt="Image 3"
          className={projectImage}
        />
      </div>
    </div>
  </div>
)

export default Project
