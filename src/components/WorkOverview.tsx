import * as React from "react"

type WorkOverviewProps = {
  title: string
  description: string
  image: string
  introTitle: string
  introDescription: string
  introImage: string
}

const WorkOverview = ({
  title,
  description,
  image,
  introTitle,
  introDescription,
  introImage,
}: WorkOverviewProps): React.ReactElement => (
  <>
    <div className="tuple">
      <h1>
        <span className="line2">{title}</span>
      </h1>
      <p>{description}</p>
    </div>
    <div className="truck">
      <img src={image} alt="" id="web-view" />
      <img src="/images/work/image 9 (1).svg" alt="" id="mob-view" />
    </div>

    <div className="introduction">
      <div className="intro">
        <h2>{introTitle}</h2>
        <p>{introDescription}</p>
      </div>
      <div id="blue-bgM">
        <img src="/images/blue-tint/backdropMob.png" alt="" />
      </div>
      <div className="intro-pic">
        <img src={introImage} alt="" />
      </div>
    </div>
  </>
)

export default WorkOverview
