import EmblaCarousel, { UserOptions } from 'embla-carousel'
import { createElement, createRef, useCallback, useEffect, useState } from 'react'
import { canUseDOM } from './utils'

const useEmblaCarousel = (options?: UserOptions) => {
  const [embla, setEmbla] = useState<EmblaCarousel>()
  const container = createRef<HTMLElement>()

  useEffect(() => {
    if (canUseDOM && container?.current) {
      setEmbla(EmblaCarousel(container.current, options))
    }
  }, [container, options])

  useEffect(() => {
    return () => embla?.destroy()
  }, [embla])

  const Carousel = useCallback(({
    htmlTagName = 'div',
    className,
    children,
  }) => {
    return createElement(
      htmlTagName,
      {
        className,
        ref: container,
        style: { overflow: 'hidden' },
      },
      children,
    )
  }, [])

  return [
    Carousel,
    embla
  ]
}

export default useEmblaCarousel
