import * as React from "react"
import { useSwiper } from "swiper/react"

// type NavButtonsProps = {}

const NavButtons: React.FC = () => {
  const swiper = useSwiper()
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px",
        position: "relative",
        top: "0",
      }}
    >
      <button
        onClick={() => {
          swiper.slidePrev()
        }}
      >
        <img src="/images/work/arrow-left.svg" />
      </button>
      <button
        onClick={() => {
          swiper.slideNext()
        }}
      >
        <img src="/images/work/arrow-right.svg" />
      </button>
    </div>
  )
}

export default NavButtons
