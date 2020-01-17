import EmblaCarousel, { UserOptions } from 'embla-carousel'
import React, { Component, ReactNode } from 'react'

type PropType = {
  htmlTagName: string
  children?: ReactNode
  className?: string
  options?: UserOptions
  emblaRef?: (embla: EmblaCarousel) => void
}

const canUseDOM = !!(typeof window !== 'undefined' && window.document)

class EmblaCarouselReact extends Component<PropType> {
  static defaultProps = { htmlTagName: 'div' }
  container = React.createRef<HTMLElement>()
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
    return React.createElement(
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
export { UserOptions }
