class Nav extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
    <nav>
    <a href="index.html">0</a>
    <a href="coordinate.html">1</a>
    <a href="triangle.html">2</a>
    <a href="array.html">3</a>
    <a href="midpoint.html">4</a>
    <a href="function.html">5</a>
    <a href="recursion.html">6</a>
    <a href="split.html">7</a> 
    <a href="sierpinski.html">8</a>
</nav>`
  }
}

customElements.define('nav-component', Nav)