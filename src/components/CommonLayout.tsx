import React from "react"
import BaseLayout from "./BaseLayout"
import Solution from "./Solution"
import Testimonial from "./Testimonial"
import useCommon from "../hooks/useCommon"

type LayoutProp = {
  children: React.ReactNode
}
const CommonLayout = ({ children }: LayoutProp): React.ReactElement => {
  const { solution, testimonials } = useCommon()
  return (
    <BaseLayout>
      {children}
      <Testimonial {...testimonials?.at(0)!} />
      <Solution {...solution} />
    </BaseLayout>
  )
}

export default CommonLayout