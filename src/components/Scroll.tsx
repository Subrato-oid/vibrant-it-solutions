import type React from "react"
import { useEffect } from "react"
import Scrollbar from "smooth-scrollbar"
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll"

type OverscrollOptions = {
  enable: boolean
  effect: string
  damping: number
  maxOverscroll: number
  glowColor: string
}

const overscrollOptions: OverscrollOptions = {
  enable: true,
  effect: "bounce",
  damping: 0.15,
  maxOverscroll: 150,
  glowColor: "#fff",
}

//   const overscrollOptions = {
//     enable: true,
//     effect: 'glow',
//     damping: 0.1,
//     maxOverscroll: 200,
//     glowColor: '#222a2d',
//   };

const options = {
  damping: 0.06,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
}

const Scroll: React.FC = () => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin)
    const scrollbar = Scrollbar.init(document.querySelector("main")!, options)

    return () => {
      if (scrollbar) scrollbar.destroy()
    }
  }, [])

  return null
}

export default Scroll
