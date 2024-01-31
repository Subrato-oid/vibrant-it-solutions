import * as React from "react"
import { type AboutPageFrontmatterType } from "../pages/about"

type AboutImageProps = NonNullable<AboutPageFrontmatterType>["aboutCollage"]

const AboutImage = (
  props: NonNullable<AboutImageProps>
): React.ReactElement => (
  <div className={"about-images"}>
    {props?.images?.map((item, index) => (
      <div className={`img${index + 1}`} key={index}>
        <img src={item?.image!} alt="" />
      </div>
    ))}
    {/* <div className={"img1"}>
      <img src={"/images/about-us/image 26.svg"} alt="" />
    </div>
    <div className={"img2"}>
      <img src="/images/about-us/image 27.svg" alt="" />
    </div>
    <div className={"img3"}>
      <img src="/images/about-us/image 29.svg" alt="" />
    </div>
    <div className={"img4"}>
      <img src="/images/about-us/image 28.svg" alt="" />
    </div> */}
  </div>
)

export default AboutImage
