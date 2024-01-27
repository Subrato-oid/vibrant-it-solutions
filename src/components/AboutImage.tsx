import * as React from "react"

// type AboutImageProps = NonNullable<IndexPageFrontmatterType>["AboutImage"]

const AboutImage = (): React.ReactElement => (
  <div className={"about-images"}>
    <div className={"img1"}>
      <img src="/images/about-us/image 26.svg" alt="" />
    </div>
    <div className={"img2"}>
      <img src="/images/about-us/image 27.svg" alt="" />
    </div>
    <div className={"img3"}>
      <img src="/images/about-us/image 29.svg" alt="" />
    </div>
    <div className={"img4"}>
      <img src="/images/about-us/image 28.svg" alt="" />
    </div>
  </div>
)

export default AboutImage
