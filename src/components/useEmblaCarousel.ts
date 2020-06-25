import EmblaCarousel, { EmblaOptions } from 'embla-carousel'
import {
  createElement,
  createRef,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { canUseDOM } from './utils'

type PropType = {
  htmlTagName?: string
  children?: ReactNode
  className?: string
}

const useEmblaCarousel = (
  options?: EmblaOptions,
): [FC<PropType>, EmblaCarousel?] => {
  const [embla, setEmbla] = useState<EmblaCarousel>()
  const container = createRef<HTMLElement>()

  useEffect(() => {
    if (canUseDOM && container?.current) {
      setEmbla(EmblaCarousel(container.current, options))
    }
  }, [container, options])

  useEffect(() => {
    return () => embla?.destroy()
  }, [])

  const Carousel: FC<PropType> = useCallback(
    ({ htmlTagName = 'div', className, children }) => {
      return createElement(
        htmlTagName,
        {
          className,
          ref: container,
        },
        children,
      )
    },
    [],
  )

  return [Carousel, embla]
}

export default useEmblaCarousel
