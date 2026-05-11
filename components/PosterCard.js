const template = document.createElement('template');

template.setHTMLUnsafe(/*html*/ `
  <style>
    @import url('./components/PosterCard.css');
  </style>

  <div class="poster">
    <div class="header">
      <div class="exclaim-left">
        <div class="bar"></div>
        <div class="dot"></div>
      </div>
      <div class="exclaim-right">
        <div class="bar"></div>
        <div class="dot"></div>
      </div>

      <div class="title-group">
        <div class="la-sede"><span id="title">LA SEDE TE ACOMPAÑA</span></div>
      </div>
    </div>

    <div class="message">
      <p id="msg1">El respeto no se negocia</p>
      <p id="msg2">¡Pará ya de acosar!</p>
    </div>

    <div class="qr-section">
      <p class="qr-label" id="qr-label">Si necesitás ayuda,<br />escaneá este QR:</p>
      <div class="qr-box">
        <div class="qr-grid">
          <div class="qr-corner-tl"></div>
          <div class="qr-corner-tr"></div>
          <div class="qr-corner-bl"></div>
          <div class="qr-pattern"></div>
        </div>
      </div>
    </div>

    <div class="people">
      <img id="poster-image" src="personas.png" alt="Personas" />
    </div>

    <div class="footer">
      <div class="footer-item">
        <span class="footer-ucr" id="footer1">UCR</span>
        <div class="footer-ucr-line"></div>
      </div>
      <div class="footer-item bordered">
        <span class="footer-ucr-sm" id="footer2">UCR</span>
        <span class="footer-libre" id="footer3">LIBRE DE<br />ACOSO<br />SEXUAL</span>
      </div>
      <div class="footer-item">
        <span class="footer-sg" id="footer4">SG</span>
        <span class="footer-sede" id="footer5">Sede de<br />Guanacaste</span>
      </div>
    </div>
  </div>
`);

class PosterCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const node = template.content.cloneNode(true);

    const updateText = (selector, attrName) => {
      const val = this.getAttribute(attrName);
      if (val !== null) {
        node.querySelector(selector).setHTMLUnsafe(val);
      }
    };

    updateText('#title', 'title');
    updateText('#msg1', 'message1');
    updateText('#msg2', 'message2');
    updateText('#qr-label', 'qr-label');
    updateText('#footer1', 'footer1');
    updateText('#footer2', 'footer2');
    updateText('#footer3', 'footer3');
    updateText('#footer4', 'footer4');
    updateText('#footer5', 'footer5');

    const image = this.getAttribute('image');
    if (image) {
      node.querySelector('#poster-image').src = image;
    }

    this.replaceChildren(node);
  }
}

customElements.define('poster-card', PosterCard);
