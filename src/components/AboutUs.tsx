import * as React from "react"

// type AboutUsProps = NonNullable<IndexPageFrontmatterType>["AboutUs"]

const AboutUs = (): React.ReactElement => (
  <div className="inspire">
    <div className={"inspiration"}>
      <h5>About Us</h5>
      <h1>
        <span className={"line1"}>Where Business Meets</span>
        <span className={"line1"}>Top Notch</span>
        <span className={"line2"}>IT Solutions</span>
      </h1>
      <p>
        Vibrant IT Solutions Pvt Ltd. is a certified company specializing in
        web, mobile, and game app development. We offer a wide range of IT
        services, including software development, cybersecurity, cloud
        solutions, and IT consulting. We collaborate globally and provide 24/7
        customer support.
      </p>
    </div>
  </div>
)

export default AboutUs
