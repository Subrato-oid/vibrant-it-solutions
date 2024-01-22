import React from "react"
import {
  section,
  leftSection,
  line2,
  rightSection,
  exp,
  subheading,
  paragraph
} from "./Expertise.module.css"

// type ExpertiseProp = {}

const Expertise = (): React.ReactElement => (
  <div className={section}>
    <div className={leftSection}>
      <h2>
        Sneak peek into our <span className={line2}>impactful</span>&nbsp;areas
        of expertise:
      </h2>
    </div>
    <div className={rightSection}>
      <div className={exp}>
        <h3 className={subheading}>Mobile app design</h3>
        <p className={paragraph}>
          We make sure our application designs are visually appealing and simple
          to use so that more people will use and enjoy them.
        </p>
      </div>
      <div className={exp}>
        <h3 className={subheading}>Mobile app integration</h3>
        <p className={paragraph}>
          We at VibrantIT are well-versed in a variety of APIs. We ensure that
          everything works properly, connecting your systems and other
          applications without any issues.
        </p>
      </div>
      <div className={exp}>
        <h3 className={subheading}>Android App Development</h3>
        <p className={paragraph}>
          At VibrantIT, we develop and release mobile apps that are fast,
          stable, and perform admirably. We've completed projects that show our
          expertise.
        </p>
      </div>
    </div>
  </div>
)

export default Expertise
