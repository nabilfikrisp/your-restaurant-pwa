class AppMain extends HTMLElement {
  connectedCallback() {
    this.setAttribute('id', 'mainContent');
    this.render();
  }

  render() {
    this.innerHTML = `
    
    `;
  }
}

customElements.define('app-main', AppMain);
