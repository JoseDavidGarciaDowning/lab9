const template = document.createElement('template');

template.setHTMLUnsafe(/*html*/ `
  <style>
    @import url('./components/RotuloCard.css');
  </style>
  <div class="container">
    <div class="indicator">
      <div class="content">Aula 5, 6, 7</div>
      <div class="arrow"></div>
    </div>
    <div class="indicator">
      <div class="content">Apoyo Informatico</div>
      <div class="arrow"></div>
    </div>
    <div class="indicator">
      <div class="content">Servidores</div>
      <div class="arrow"></div>
    </div>
    <div class="indicator">
      <div class="content">Laboratorio 1 y 2</div>
      <div class="arrow"></div>
    </div>
    <div class="indicator">
      <div class="content">Coordinacion informatica empresarial</div>
      <div class="arrow"></div>
    </div>
    <footer>
      <img src="image.png" alt="" />
    </footer>
  </div>
`);

class RotuloCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('rotulo-card', RotuloCard);
