import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createSkeletonTemplate } from '../templates/template-creator';

const Trending = {
  async render() {
    return `
    <div class="content">
      <picture>
        <source media="(max-width: 420px)" srcset="./images/hero_1-xs.jpeg" id="hero">
        <source media="(max-width: 600px)" srcset="./images/hero_1-small.jpeg" id="hero">
        <source media="(max-width: 800px)" srcset="./images/hero_1-medium.jpeg" id="hero">
        <img src='./images/hero_1-large.jpeg' alt="hero" id="hero">
      </picture>

      <h2 class="content__heading">Now Trending in Town</h2>
      <div id="restaurants" class="restaurants">
      </div>
      <div id="error" class="error">
        <p>Failed to fetch trending restaurants. Please try again later.</p>
      </div>
    </div>
  `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const errorContainer = document.querySelector('#error');

    try {
      const restaurants = await RestaurantSource.trendingRestaurants();
      if (restaurants.length > 0) {
        restaurantsContainer.innerHTML = '';
        restaurants.forEach((restaurant) => {
          const restaurantItem = createRestaurantItemTemplate(restaurant);
          restaurantsContainer.innerHTML += restaurantItem;
        });
      } else {
        restaurantsContainer.innerHTML = createSkeletonTemplate(4); // Show 4 skeleton cards
      }
      errorContainer.style.display = 'none';
    } catch (error) {
      restaurantsContainer.innerHTML = '';
      errorContainer.style.display = 'block';
    }
  },
};

export default Trending;
