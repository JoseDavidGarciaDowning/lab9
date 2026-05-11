const template = document.createElement('template');

template.setHTMLUnsafe(/*html*/ `
  <style>
    @import url('./components/RotuloCard.css');
  </style>
  <div class="container">
    <footer>
      <img id="rotulo-image" src="image.png" alt="" />
    </footer>
  </div>
`);

class RotuloCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const node = template.content.cloneNode(true);
    
    const image = this.getAttribute('image');
    if (image) {
      node.querySelector('#rotulo-image').src = image;
    }

    const itemsAttr = this.getAttribute('items');
    let items = [
      "Aula 5, 6, 7",
      "Apoyo Informatico",
      "Servidores",
      "Laboratorio 1 y 2",
      "Coordinacion informatica empresarial"
    ];

    if (itemsAttr) {
      try {
        items = JSON.parse(itemsAttr);
      } catch (e) {
        console.error("Invalid items JSON in rotulo-card", e);
      }
    }

    const container = node.querySelector('.container');
    const footer = node.querySelector('footer');

    const wrapper = document.createElement('div');
    const indicatorsHTML = items.map(item => `
      <div class="indicator">
        <div class="content">${item}</div>
        <div class="arrow"></div>
      </div>
    `).join('');
    wrapper.setHTMLUnsafe(indicatorsHTML);

    while (wrapper.firstChild) {
      container.insertBefore(wrapper.firstChild, footer);
    }

    this.replaceChildren(node);
  }
}

customElements.define('rotulo-card', RotuloCard);
