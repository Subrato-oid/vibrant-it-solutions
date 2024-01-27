import React from "react"
import { type IndexPageFrontmatterType } from "../pages"

type HeroProps = NonNullable<IndexPageFrontmatterType>["hero"]

const Hero = (props: NonNullable<HeroProps>): React.ReactElement => (
  <div className="container">
    <div className="content">
      <h1 id="wH1">
        <span className="line1">{props.titleUp}</span>
        <br />
        <span className="line2">{props.titleHighlight}</span>
        <span className="line1">{props.titleDown}</span>
      </h1>
      <h1 id="mH1">
        <span className="line1">{props.titleUp}</span>
        <span className="line2">{props.titleHighlight}</span>
        <br />
        <span className="line1">{props.titleDown}</span>
      </h1>
      <p>{props.description}</p>
      <a href="#" className="button">
        {props.button?.buttonText} <img src={props.button?.icon!} alt="" />
      </a>
    </div>
    <div className="image">
      <img src={props.image!} alt="Description of your image" />
    </div>
  </div>
)

export default Hero
