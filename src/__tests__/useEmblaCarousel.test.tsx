import React from 'react'
import { mount, configure } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { UserOptions, useEmblaCarousel } from '..'

configure({ adapter: new EnzymeAdapter() })

const options: UserOptions = {
  align: 'center',
  containerSelector: '*',
  slidesToScroll: 1,
  draggable: true,
  dragFree: false,
  loop: false,
  speed: 10,
  startIndex: 0,
  selectedClass: 'is-selected',
  draggableClass: 'is-draggable',
  draggingClass: 'is-dragging',
}

describe('Embla Carousel Hook', () => {
  const EmblaCarouselHook = () => {
    const [EmblaCarousel] = useEmblaCarousel(options)
    return (
      <EmblaCarousel>
        <ul>
          <li />
          <li />
          <li />
        </ul>
      </EmblaCarousel>
    )
  }

  test('Renders children', () => {
    const embla = mount(<EmblaCarouselHook />)
    expect(embla.find('ul').length).toBe(1)
    expect(embla.find('li').length).toBe(3)
  })
})
