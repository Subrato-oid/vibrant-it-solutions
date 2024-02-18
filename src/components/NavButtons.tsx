import * as React from "react"

type NavButtonsProps = {
  clickPrev: Function
  clickNext: Function
}
// export const navigationPrevRef = React.useRef(null);
// export const navigationNextRef = React.useRef(null);

const NavButtons: React.FC<NavButtonsProps> = ({ clickPrev, clickNext }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        gap: "20px",
        position: "relative",
        marginTop: "20px",
        paddingRight: "10px",
      }}
    >
      <button
        // ref={navigationPrevRef}
        style={{ border: "none", background: "white" }}
        onClick={() => clickPrev()}
      >
        <img src="/images/work/arrow-left.svg" />
      </button>
      <button
        // ref={navigationNextRef}
        style={{ border: "none", background: "white" }}
        onClick={() => clickNext()}
      >
        <img src="/images/work/arrow-right.svg" />
      </button>
    </div>
  )
}

export default NavButtons
