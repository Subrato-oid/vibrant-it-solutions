import * as React from "react"

// type NewsLetterProps = NonNullable<IndexPageFrontmatterType>["NewsLetter"]

const NewsLetter = (): React.ReactElement => (
  <div className="newsletter">
    <h2>
      <span className="head2">Subscribe</span>&nbsp;
      <span className="head1">
        our newsletter & get all the timely updates into your inbox
      </span>
    </h2>
    <div className="subscription-container">
      <form>
        <input
          type="email"
          className="email-input"
          placeholder="Enter your email"
          required
        />
        <button type="submit" className="button">
          Subscribe
        </button>
      </form>
    </div>
  </div>
)

export default NewsLetter
