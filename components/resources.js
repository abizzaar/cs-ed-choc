class Resources extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
    <link href='https://www.fullstack.io/choc/components/normalize-css/normalize.css' rel='stylesheet'>
    <link href='https://www.fullstack.io/choc/components/codemirror/lib/codemirror.css' rel='stylesheet'>
    <link href='https://www.fullstack.io/choc/components/components-foundation/css/foundation.min.css' rel='stylesheet'>
    <link href='https://www.fullstack.io/choc/components/jquery-ui/themes/ui-lightness/jquery-ui.min.css' rel='stylesheet'>
    <link href='https://www.fullstack.io/choc/styles/choc.css' rel='stylesheet'>
    <link href='https://www.fullstack.io/choc/styles/choc-editor.css' rel='stylesheet'>
    `
  }
}

customElements.define('resources-component', Resources);