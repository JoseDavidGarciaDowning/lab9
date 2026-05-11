const template = document.createElement('template');

template.setHTMLUnsafe(/*html*/ `
  <style>
    @import url('./components/PosterCard.css');
  </style>

  <div class="poster">
    <!-- ════ HEADER ════ -->
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
        <div class="la-sede"><span>LA SEDE</span></div>
        <div class="te-acompana">
          <div class="te-badge"><span>TE</span></div>
          <div class="acompana-badge"><span>ACOMPAÑA</span></div>
        </div>
      </div>
    </div>

    <!-- ════ MESSAGE ════ -->
    <div class="message">
      <p>El respeto no se negocia</p>
      <p>¡Pará ya de acosar!</p>
    </div>

    <!-- ════ QR CODE ════ -->
    <div class="qr-section">
      <p class="qr-label">Si necesitás ayuda,<br />escaneá este QR:</p>
      <div class="qr-box">
        <div class="qr-grid">
          <div class="qr-corner-tl"></div>
          <div class="qr-corner-tr"></div>
          <div class="qr-corner-bl"></div>
          <div class="qr-pattern"></div>
        </div>
      </div>
    </div>

    <!-- ════ PEOPLE ════ -->
    <div class="people">
      <img src="personas.png" alt="Personas" />
    </div>

    <!-- ════ FOOTER ════ -->
    <div class="footer">
      <div class="footer-item">
        <span class="footer-ucr">UCR</span>
        <div class="footer-ucr-line"></div>
      </div>
      <div class="footer-item bordered">
        <span class="footer-ucr-sm">UCR</span>
        <span class="footer-libre">LIBRE DE<br />ACOSO<br />SEXUAL</span>
      </div>
      <div class="footer-item">
        <span class="footer-sg">SG</span>
        <span class="footer-sede">Sede de<br />Guanacaste</span>
      </div>
    </div>
  </div>
`);

class PosterCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('poster-card', PosterCard);
