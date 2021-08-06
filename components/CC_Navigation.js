var rootHTML = `
  <style>
    .box {
      background-color: red;
      height: 100px;
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  </style>

  <div class="box">
    <h1>Box 1</h1>
  </div>
`


class Navigation extends HTMLElement {

  constructor() {
    super()
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = rootHTML;
    // initializations
  }
  connectedCallback() { 
    // Called when element is put into the DOM
    console.log('Called when element is put into the DOM')
  }

  attributeChangeCallback() { 
    // This is called everytime the custom elements attributes are changed.
    console.log('This is called everytime the custom elements attributes are changed.')
  }

  disconnectedCallback() { 
    // Called when element is detached from DOM
    console.log('Called when element is detached from DOM')
  }
}

// This defines
customElements.define('cc-nav', Navigation);




