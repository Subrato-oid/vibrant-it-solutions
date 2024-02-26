import * as React from "react"
import { type ContactPageFrontmatterType } from "../pages/contact"
import { MenuItem, TextField } from "@mui/material"
import { styled } from "@mui/system"

type ContactFormProps = NonNullable<ContactPageFrontmatterType>

const ContactForm = (
  props: NonNullable<ContactFormProps>
): React.ReactElement => {
  // const [selectedOption, setSelectedOption] = React.useState<string>("")

  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
  //   setSelectedOption(event.target.value)
  // }

  const CustomizedTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "blue",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green", // Border color when focused
      },
    },
    "& .MuiFormLabel-root": {
      "&.Mui-focused": {
        transform: "translate(0, -0.5rem) scale(0.65)",
      },
      "&.MuiFormLabel-filled": {
        transform: "translate(0, -0.5rem) scale(0.65)",
      },
    },
  }))

  const options = [
    { value: "none", label: "Select an option", disabled: true },
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
          <h5>{props?.kicker}</h5>
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
            name="Contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="flex flex-col max-w-md mx-auto"
          >
            <input type="hidden" name="form-name" value="Contact" />

            {/* <div className="input-group">
              <input
                id="contact-name"
                type="text"
                name="Name"
                placeholder=""
                required
              />
              <label htmlFor="contact-name">Name</label>
            </div> */}
            {/* <div className="input-group">
              <input
                id="contact-email"
                type="email"
                name="Email"
                placeholder=""
                required
              />
              <label htmlFor="contact-email">Email*</label>
            </div> */}
            {/* <div
              className="input-group"
              style={{ display: "flex", flexDirection: "column-reverse" }}
            >
              <select
                id="contact-industry"
                name="industry"
                value={selectedOption}
                required
                onChange={handleChange}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <label
                htmlFor="contact-industry"
                // style={{
                //   fontSize: "1rem",
                // }}
              >
                YOUR INDUSTRY
              </label>
            </div> */}
            {/* <div className="input-group">
              <textarea
                id="contact-message"
                name="Message"
                placeholder=""
                required
              />
              <label htmlFor="contact-message">
                What else we should know before responding ?
              </label>
            </div> */}

            <CustomizedTextField
              id="standard-basic"
              name="Name"
              label="Name"
              variant="standard"
              style={{
                width: "100%",
              }}
              className="field"
            />

            <CustomizedTextField
              id="standard-basic"
              name="Email"
              label="Email*"
              variant="standard"
              style={{
                width: "100%",
              }}
              className="field"
            />

            <TextField
              id="outlined-select-currency-native"
              name="Industry"
              select
              label="YOUR INDUSTRY"
              variant="standard"
              defaultValue="none"
              className="select-field"
            >
              {options.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled ?? false}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <CustomizedTextField
              id="standard-basic"
              name="Message"
              label="What else we should know before responding ?"
              variant="standard"
              multiline
              className="field"
            />

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
