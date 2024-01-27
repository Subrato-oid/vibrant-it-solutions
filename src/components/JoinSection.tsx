import * as React from "react"

// type JoinSectionProps = NonNullable<IndexPageFrontmatterType>["JoinSection"]

const JoinSection = (): React.ReactElement => (
  <>
    <div className={"why-join"}>
      <h2>
        <span className={"head1"}>Why Join</span>
        <span className={"head2"}>Vibrant IT Solutions</span>
      </h2>
      <p>
        We emphasize people, whether they are employees, partners, or clients,
        and we constantly consider their development. We grow along with you.
        Our key principles focus on Work Freedom, Growth, and Excellence,
        promoting constant growth for you, our company, and our clients.
      </p>
    </div>
    <div className={"V-details"}>
      <div className={"left"}>
        <div className={"v-it"}>
          <h3>International Clients</h3>
          <p>
            We help clients worldwide, so you'll have the chance to collaborate
            with them, contribute to their businesses, and build your network by
            offering IT solutions.
          </p>
        </div>
        <div className={"v-it"}>
          <h3>Chill Environment</h3>
          <p>
            We are fitness freaks, but sometimes our love for burgers leads us
            to have a cheat day at the office.
          </p>
        </div>
        <div className={"v-it"}>
          <h3>Professional Growth</h3>
          <p>
            We don't restrict you to just your job. We make sure you keep
            learning and gaining experience in what you love, so work always
            stays interesting.
          </p>
        </div>
      </div>
      <div className={"right"}>
        <img src="/images/Career/Frame 65.svg" alt="" />
      </div>
    </div>
  </>
)

export default JoinSection
