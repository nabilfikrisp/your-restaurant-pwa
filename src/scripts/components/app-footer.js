class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>
        All data obtained from
        <a
          href="https://restaurant-api.dicoding.dev"
          target="_blank"
          rel="noreferrer"
          >dicoding restaurant-api</a
        >
      </p>
    `;
  }
}

customElements.define('app-footer', AppFooter);
