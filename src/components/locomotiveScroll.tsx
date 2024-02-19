import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"

const scroll = {
  container: "#___gatsby",
  options: {
    smooth: true,
    smoothMobile: false,
    getDirection: true,
    touchMultiplier: 2.5,
    lerp: 0.1,
    getSpeed: true,
  },
}

const Scroll = (callbacks: any): null => {
  useEffect(() => {
    console.log("callbacks", callbacks)
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector<HTMLElement>(scroll.container) ?? undefined,
      ...scroll.options,
    })
    locomotiveScroll.update()

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll as any

    locomotiveScroll.on("scroll", (func: any) => {
      // console.log(func)
      // Update `data-direction` with scroll direction.
      // document.documentElement.setAttribute("data-direction", func.direction)
    })

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll
