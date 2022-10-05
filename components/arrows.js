class Arrows extends HTMLElement {
  constructor() {
    super()

  }

  getPath() {
    const pathname = window.location.pathname
    const lastSlash = pathname.lastIndexOf('/')
    return pathname.slice(lastSlash+1)
  }

  connectedCallback() {
    const path = this.getPath();
    const navPathIndex = navDirectory.findIndex(nav => nav === path)

    const leftHref = navDirectory[navPathIndex-1]
    const rightHref = navDirectory[navPathIndex+1]

    const leftArrow = `<a class="arrow left-arrow" href=${leftHref}>&#x25C0;</a>`
    const rightArrow = `<a class="arrow right-arrow" href=${rightHref}>&#x25B6;</a>`

    if (navPathIndex === 0) {
      this.innerHTML = rightArrow
    } else if (navPathIndex === navDirectory.length - 1) {
      this.innerHTML = leftArrow
    } else {
      this.innerHTML = `<div>${leftArrow}${rightArrow}</div>`
    }
  }
}

customElements.define('arrows-component', Arrows)