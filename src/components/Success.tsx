import * as React from "react"

// type SuccessProps = { unknown }

const Success = (): React.ReactElement => (
  <div className="container2">
    <div className="success">
      <h2>
        <span className="head1">Fueling Success: Our</span>
        <br />
        <span className="head2">Impact Snapshot</span>
      </h2>
      <div className="boxes">
        <div className="sbox">
          <h1>40+</h1>
          <p>Employees</p>
        </div>
        <div className="sbox">
          <h1>12</h1>
          <p>Years in IT</p>
        </div>
        <div className="sbox">
          <h1>20+</h1>
          <p>Mobile Apps</p>
        </div>
        <div className="sbox">
          <h1>350+</h1>
          <p>Success Stories</p>
        </div>
      </div>
    </div>
  </div>
)

export default Success
