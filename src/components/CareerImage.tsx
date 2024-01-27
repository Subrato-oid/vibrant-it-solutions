import * as React from "react"
import { careerImage } from "./Career.module.css"

// type CareerImageProps = NonNullable<IndexPageFrontmatterType>["CareerImage"]

const CareerImage = (): React.ReactElement => (
  <div className={careerImage}>
    <img src="/images/Career/Frame 69.svg" alt="" />
  </div>
)

export default CareerImage
