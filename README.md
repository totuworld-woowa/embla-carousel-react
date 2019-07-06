<br />
<div align="center">
  <p align="center">
    <a href="https://davidcetinkaya.github.io/embla-carousel" target="_blank"><img width="80" height="80" src="https://rawgit.com/davidcetinkaya/embla-carousel/master/docs/assets/embla-logo.svg" alt="Embla Carousel">
    </a>
  </p>

  <strong>
    <h1 align="center">Embla Carousel React</h1>
  </strong>

  <p align="center">
    A React.js component for Embla Carousel, written in TypeScript.
  </p>

  <p align="center">
    <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
    <a href="https://www.npmjs.com/package/embla-carousel-react" target="_blank"><img src="https://img.shields.io/npm/v/embla-carousel-react.svg"></a>
    <a href="https://travis-ci.org/davidcetinkaya/embla-carousel-react" target="_blank"><img src="https://img.shields.io/travis/davidcetinkaya/embla-carousel-react/master.svg"></a>
    <a href="https://prettier.io" target="_blank"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat"></a>
  </p>

  <p align="center">
    <strong>
      <h4 align="center">
        <code> &nbsp; <a href="https://davidcetinkaya.github.io/embla-carousel">DEMO PAGE</a> &nbsp; </code>
      </h4>
    </strong>
  </p>
</div>

<br>

<p align="center">
  <strong>
    « &nbsp;<code><a href="#quickstart">USAGE</a></code>
  </strong>
  <strong>
    &nbsp; | &nbsp;
  </strong>
  <strong>
    <code><a href="#props">PROPS</a></code>&nbsp; »
  </strong>
</p>

<br>

<p align="center">
  <a href="https://github.com/davidcetinkaya/embla-carousel">
    <img src="https://rawgit.com/davidcetinkaya/embla-carousel/master/docs/assets/javascript-logo.svg" height="50" alt="Embla Carousel JavaScript" />
  </a>
  &nbsp;
  <a href="https://github.com/davidcetinkaya/embla-carousel-react">
    <img src="https://rawgit.com/davidcetinkaya/embla-carousel/master/docs/assets/react-logo.svg" height="50" alt="Embla Carousel React" />
  </a>
</p>

<br>

## Installation

NPM

<pre>npm install <a href="https://www.npmjs.com/package/embla-carousel-react">embla-carousel-react</a></pre>

```javascript
import EmblaCarouselReact from 'embla-carousel-react'
```

## QuickStart

React Component

```javascript
class EmblaCarouselComponent extends Component {
  componentDidMount() {
    this.embla.on('select', () => {
      console.log(
        `Current index is ${this.embla.selectedScrollSnap()}`,
      )
    })
  }

  next() {
    this.embla.scrollNext()
  }

  prev() {
    this.embla.scrollPrev()
  }

  render() {
    return (
      <>
        <EmblaCarouselReact
          htmlTagName="div"
          emblaRef={c => (this.embla = c)}
          options={{ loop: false }}
        >
          <div style={{ display: 'flex', willChange: 'transform' }}>
            <div style={{ flex: '0 0 auto', width: '100%' }}>
              Slide 1
            </div>
            <div style={{ flex: '0 0 auto', width: '100%' }}>
              Slide 2
            </div>
            <div style={{ flex: '0 0 auto', width: '100%' }}>
              Slide 3
            </div>
          </div>
        </EmblaCarouselReact>
        <button onClick={() => this.prev()}>Previous</button>
        <button onClick={() => this.next()}>Next</button>
      </>
    )
  }
}
```

## Props

- **`htmlTagName`** - Any valid HTML tag like `div` or `ul` etc.
- **`className`** - Applied to top the top level wrapper.
- **`emblaRef`** - Like a ref function to access the Embla instance in parent component.
- **`options`** - Same [options](https://github.com/davidcetinkaya/embla-carousel#options) as the vanilla JS Embla package.

<br>
<br>

<h2 align="center">License</h2>

<p align="center">
  <sup>Copyright © 2019-present, David Cetinkaya.</sup><br>
  Embla is <a href="https://github.com/davidcetinkaya/embla-carousel-react/blob/master/LICENSE">MIT licensed</a>.
</p>
