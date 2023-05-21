class AppHeader extends HTMLElement {
  connectedCallback() {
    this.classList.add('app-bar');
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="app-bar__menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
          <h1>YR</h1>
          <div id="search-form">
              <a for="search-bar" href="#/search" id="search-btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-search"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M21 21l-6 -6"></path>
                </svg>
              </a>
              <input type="text" id="search-bar" placeholder="Search..." name="query" />
          </div>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li>
              
            </li>
            <li><a href="#/list">Trending</a></li>
            <li><a href="#/favorite">Your Favorite</a></li>
          </ul>
        </nav>
    `;
  }
}

customElements.define('app-header', AppHeader);
