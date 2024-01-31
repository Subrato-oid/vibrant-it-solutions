import * as React from "react"
import { type BlogPageFrontmatterType } from "../templates/blog"

type BlogContentProps = NonNullable<BlogPageFrontmatterType>["content"]

const BlogContent = (props: BlogContentProps): React.ReactElement => (
  <>
    <div className="background">{props?.blog}</div>
  </>
)

export default BlogContent

/* <h4>Background and Motivation</h4>
      <p>
        The original version of our staging system can be traced back to the
        Martin Garrix project where we had a need for ensuring that the preview
        environment for the client was behind a secure login to ensure the
        project would not leak before the release date. We threw together a
        quick prototype that we continuously used during the project. <br />
        <br />
        When we extended its use to another client project, the feedback was
        overwhelmingly positive. The prototype succeeded in addressing security
        concerns and the gaps in our deployment process became evident. It
        wasn’t just a tool; it was a solution that filled a significant gap in
        our workflow.
        <br />
        <br />
        Recognizing its potential, we made the decision to evolve this prototype
        into a full-fledged system. Our aim? To make it a cornerstone of our
        deployment process, ensuring security, efficiency and consistency in
        every project we undertook.
      </p>
    </div>
    <div className="background">
      <h4>The Evolution of our Staging Server</h4>
      <p>
        The original version of our staging system can be traced back to the
        Martin Garrix project where we had a need for ensuring that the preview
        environment for the client was behind a secure login to ensure the
        project would not leak before the release date. We threw together a
        quick prototype that we continuously used during the project. <br />
        <br />
        When we extended its use to another client project, the feedback was
        overwhelmingly positive. The prototype succeeded in addressing security
        concerns and the gaps in our deployment process became evident. It
        wasn’t just a tool; it was a solution that filled a significant gap in
        our workflow.
        <br />
        <br />
        Recognizing its potential, we made the decision to evolve this prototype
        into a full-fledged system. Our aim? To make it a cornerstone of our
        deployment process, ensuring security, efficiency and consistency in
        every project we undertook.
      </p>
    </div>

    <div className="img-container">
      <img src="media/blog-detail/image 34.svg" alt="" />
    </div>

    {/* <!---- TECH STACKS AND AUTOMATED SECTION ----> */

// <div className="background">
//   <h4>Tech Stacks and Intergration</h4>
//   <p>
//     The original version of our staging system can be traced back to the
//     Martin Garrix project where we had a need for ensuring that the preview
//     environment for the client was behind a secure login to ensure the
//     project would not leak before the release date. We threw together a
//     quick prototype that we continuously used during the project.
//   </p>
// </div>
// <div className="background">
//   <h4>The Evolution of our Staging Server</h4>
//   <p>
//     The original version of our staging system can be traced back to the
//     Martin Garrix project where we had a need for ensuring that the preview
//     environment for the client was behind a secure login to ensure the
//     project would not leak before the release date. We threw together a
//     quick prototype that we continuously used during the project. <br />
//     <br />
//     When we extended its use to another client project, the feedback was
//     overwhelmingly positive. The prototype succeeded in addressing security
//     concerns and the gaps in our deployment process became evident. It
//     wasn’t just a tool; it was a solution that filled a significant gap in
//     our workflow.
//   </p> */}
