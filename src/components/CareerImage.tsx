import * as React from "react"
import { type CareerPageFrontmatterType } from "../pages/career"

type CareerImageProps = NonNullable<
NonNullable<CareerPageFrontmatterType>["career"]
>["image"]

const CareerImage = ({
  image,
}: {
  image: CareerImageProps
}): React.ReactElement => (
  <div className={"career-image"}>
    <img src={image} alt="" />
  </div>
)

export default CareerImage
