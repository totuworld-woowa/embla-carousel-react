import EmblaCarousel, { EmblaOptions } from 'embla-carousel'
import { Component, createElement, createRef, ReactNode } from 'react'
import { canUseDOM } from './utils'

type PropType = {
  htmlTagName: string
  children?: ReactNode
  className?: string
  options?: EmblaOptions
  emblaRef?: (embla: EmblaCarousel) => void
}

class EmblaCarouselReact extends Component<PropType> {
  static defaultProps = { htmlTagName: 'div' }
  container = createRef<HTMLElement>()
  embla?: EmblaCarousel

  componentDidMount() {
    if (!canUseDOM) return
    this.embla = EmblaCarousel(
      this.container.current as HTMLElement,
      this.props.options,
    )
    if (this.props.emblaRef) this.props.emblaRef(this.embla)
  }

  componentWillUnmount() {
    if (this.embla) this.embla.destroy()
  }

  render() {
    return createElement(
      this.props.htmlTagName,
      {
        className: this.props.className,
        ref: this.container,
        style: { overflow: 'hidden' },
      },
      this.props.children,
    )
  }
}

export default EmblaCarouselReact
