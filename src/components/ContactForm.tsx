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
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="flex flex-col max-w-md mx-auto"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="input-group">
            <input type="text" name="Name" placeholder=" " required />
            <label>Name</label>
          </div>
          <div className="input-group">
            <input type="email" name="Email" placeholder=" " required />
            <label>Email address</label>
          </div>

          <div className="input-group">
            <input type="text" name="Industry" placeholder=" " required />
            <label>Your Industry</label>
          </div>
          <div className="input-group">
            <input name="Message" placeholder="" required />
            <label>Message</label>
          </div>

          <button type="submit" className="button">
            {props.button?.buttonText}
            <img src={props.button?.icon!} alt="" />
          </button>
        </form>
      </div>
      <div className="image-container">
        <img src="/images/contact-us/Group 34685.svg" alt="Image" />
      </div>
    </div>
  </>
)

export default ContactForm
