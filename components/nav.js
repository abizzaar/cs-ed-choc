class Nav extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const navLinks = navDirectory.map((navName, i) => {
      return `<a href=${navName}>${i}</a>`
    })
    this.innerHTML = `<nav>${navLinks.join("")}</nav>`
  }
}

customElements.define('nav-component', Nav)