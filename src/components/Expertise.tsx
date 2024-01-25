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
import { type ServicePageNodeType } from "../template/service"

type ExpertiseProp = NonNullable<
NonNullable<ServicePageNodeType>["frontmatter"]
>["expertise"]

const Expertise = (props: NonNullable<ExpertiseProp>): React.ReactElement => (
  <div className={section}>
    <div className={leftSection}>
      <h2>
        {props.titleBefore}{" "}
        <span className={line2}>{props.titleHighlight}</span>&nbsp;
        {props.titleAfter}
      </h2>
    </div>

    <div className={rightSection}>
      {props.expertises?.map((item, index) => (
        <div key={index} className={exp}>
          <h3 className={subheading}>{item?.title}</h3>
          <p className={paragraph}>{item?.description}</p>
        </div>
      ))}
    </div>
  </div>
)

export default Expertise

// {
//   /* <div className={exp}>
//         <h3 className={subheading}>Mobile app design</h3>
//         <p className={paragraph}>
//           We make sure our application designs are visually appealing and simple
//           to use so that more people will use and enjoy them.
//         </p>
//       </div>
//       <div className={exp}>
//         <h3 className={subheading}>Mobile app integration</h3>
//         <p className={paragraph}>
//           We at VibrantIT are well-versed in a variety of APIs. We ensure that
//           everything works properly, connecting your systems and other
//           applications without any issues.
//         </p>
//       </div>
//       <div className={exp}>
//         <h3 className={subheading}>Android App Development</h3>
//         <p className={paragraph}>
//           At VibrantIT, we develop and release mobile apps that are fast,
//           stable, and perform admirably. We've completed projects that show our
//           expertise.
//         </p>
//       </div> */
// }
