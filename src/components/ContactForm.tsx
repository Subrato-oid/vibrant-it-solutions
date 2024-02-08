import * as React from "react"
import { type ContactPageFrontmatterType } from "../pages/contact"

type ContactFormProps = NonNullable<ContactPageFrontmatterType>

const ContactForm = (props: ContactFormProps): React.ReactElement => {
  const [selectedOption, setSelectedOption] = React.useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedOption(event.target.value)
  }

  const options = [
    { value: "", label: "Select an option" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Finance", label: "Finance" },
    { value: "Medical", label: "Medical" },
    { value: "Software", label: "Software" },
    { value: "Textile", label: "Textile" },
    { value: "Media and news", label: "Media and news" },
    { value: "Food Processing", label: "Food Processing" },
    { value: "Hospitality", label: "Hospitality" },
    { value: "Construction", label: "Construction" },
    { value: "Law", label: "Law" },
    { value: "Advertising", label: "Advertising" },
  ]

  return (
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
            id="contact"
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
              <input type="text" name="Email" placeholder=" " required />
              <label>Email address</label>
            </div>

            <div className="input-group">
              <span>YOUR INDUSTRY</span>
              <select value={selectedOption} onChange={handleChange} required>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <textarea name="Message" placeholder="" required />
              <label>What else we should know before responding ?</label>
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
}

export default ContactForm
