import * as React from "react"

const ContactForm = (): React.ReactElement => (
  <>
    <div className="tech-tales">
      <div className="tales">
        <h5>Contact Us</h5>
        <h1>
          <span className="line1">Always On-hand</span> <br />
          <span className="line2">Contact Us</span>
        </h1>
        <p>
          We're excited to be your go-to for all your IT needs. Whether you need
          advice, support or a tech upgrade, we're here to help.
        </p>
      </div>
    </div>

    <div className="container">
      <div className="form-container">
        <form>
          <div className="container-1">
            <div className="form" id="name">
              Name
            </div>
            <div className="form" id="email">
              Email*
            </div>
          </div>

          <div className="container-2">
            {" "}
            <p>YOUR INDUSTRY</p>
            <div className="form">Select an option</div>
          </div>

          <div className="form">
            What else we should know before responding?
          </div>
        </form>
        <a href="#" className="button">
          Get a quote
          <img src="/images/Button Icon.svg" alt="" />{" "}
        </a>
      </div>

      <div className="image-container">
        <img src="/images/contact-us/Group 34685.svg" alt="Image" />
      </div>
    </div>
  </>
)

export default ContactForm
