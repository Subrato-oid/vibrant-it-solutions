import * as React from "react"
import { type ContactPageFrontmatterType } from "../pages/contact"
import { MenuItem, TextField, colors } from "@mui/material"
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

  const CustomizedSelectField = styled(TextField)(({ theme }) => ({
    "& .MuiSelect-root": {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),

      "&:focus": {
        backgroundColor: "transparent", // Prevent the background color change on focus
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: `${theme.spacing(1)} !important`, // Adjust input padding
      responsiveFontSizes: true, // Make font responsive
      color: "red",
      background: "black",
    },
    "& .MuiSelect-select-MuiInputBase-input-MuiInput-input": {
      padding: "10px 14px",
      borderRadius: "4px",
      backgroundColor: "black",
      border: `2px solid ${colors.grey[200]}`,
      fontSize: "0.25rem",
      color: colors.grey[700],
    },
    "& .MuiInputLabel-root": {
      // transform: 'translate(0, -0.5rem) scale(0.75)', // Adjust label position
      fontSize: "1rem", // Default font size for select options
      "@media (max-width: 600px)": {
        fontSize: "0.8rem", // Adjust font size for screens smaller than 600px
      },
      "@media (min-width: 1200px)": {
        fontSize: "1.2rem", // Adjust font size for screens larger than 1200px
      },
    },
    "& .MuiInput-underline:before": {
      // borderBottom: 'none', // Remove the underline
    },
    "& .MuiInput-underline:after": {
      // borderBottom: 'none', // Remove the underline
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
              id="standard-basic name"
              label="Name"
              name="user"
              variant="standard"
              className="field"
            />

            <CustomizedTextField
              id="standard-basic email"
              name="Email"
              label="Email*"
              variant="standard"
              className="field"
            />

            <CustomizedSelectField
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
            </CustomizedSelectField>

            {/* <Select
              id="outlined-select-currency-native"
              name="Industry"
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
            </Select> */}

            <CustomizedTextField
              id="standard-basic message"
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
