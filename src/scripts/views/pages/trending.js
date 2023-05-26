import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Trending = {
  async render() {
    return `
    <div class="content">
      <div id="hero"></div>
      <h2 class="content__heading">Now Trending in Town</h2>
      <div id="restaurants" class="restaurants">
      </div>
      <div id="loading" class="loading">
        <div class="loading-icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 6l0 -3"></path>
            <path d="M16.25 7.75l2.15 -2.15"></path>
            <path d="M18 12l3 0"></path>
            <path d="M16.25 16.25l2.15 2.15"></path>
            <path d="M12 18l0 3"></path>
            <path d="M7.75 16.25l-2.15 2.15"></path>
            <path d="M6 12l-3 0"></path>
            <path d="M7.75 7.75l-2.15 -2.15"></path>
          </svg>
        </div>
      </div>
      <div id="error" class="error">
        <p>Failed to fetch trending restaurants. Please try again later.</p>
      </div>
    </div>
  `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const loadingIndicator = document.querySelector('#loading');
    const errorContainer = document.querySelector('#error');

    try {
      const restaurants = await RestaurantSource.trendingRestaurants();
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      loadingIndicator.style.display = 'none';
    } catch (error) {
      loadingIndicator.style.display = 'none';
      errorContainer.style.display = 'block';
    }
  },
};

export default Trending;
