import * as React from "react"
import { type ContactPageFrontmatterType } from "../pages/contact"

type ContactFormProps = NonNullable<ContactPageFrontmatterType>

const ContactForm = (props: ContactFormProps): React.ReactElement => (
  <>
    <div className="contact-tech-tales">
      <div className="contact-tales">
        <h5>{props.kicker}</h5>
        <h1>
          <span className="line1">{props.title}</span> <br />
          <span className="line2">{props.titleHighlight}</span>
        </h1>
        <p>{props.description}</p>
      </div>
    </div>

    <div className="container">
      <div className="form-container">
        <form>
          <div className="container-1">
            <div className="form" id="name">
              {props.contactDeatils?.field1}
            </div>
            <div className="form" id="email">
              {props.contactDeatils?.field2}
            </div>
          </div>

          <div className="container-2">
            {" "}
            <p>{props.contactDeatils?.field3}</p>
            <div className="form">Select an option</div>
          </div>

          <div className="form">{props.contactDeatils?.field4}</div>
        </form>
        <a href="#" className="button">
          {props.button?.buttonText}
          <img src={props.button?.icon!} alt="" />{" "}
        </a>
      </div>

      <div className="image-container">
        <img src="/images/contact-us/Group 34685.svg" alt="Image" />
      </div>
    </div>
  </>
)

export default ContactForm
