import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Trending = {
  async render() {
    return `
    <div class="content">

        <picture>
          <source media="(max-width: 420px)" srcset="./images/hero_1-xs.jpeg" id="hero">
          <source media="(max-width: 600px)" srcset="./images/hero_1-small.jpeg" id="hero">
          <source media="(max-width: 800px)" srcset="./images/hero_1-medium.jpeg" id="hero">
          <source media="(min-width: 800px)" srcset="./images/hero_1-large.jpeg" id="hero" class="hero-skeleton">
          <img src='./images/hero_1-xs.jpeg' alt="hero" id="hero" class="hero-skeleton">
        </picture>

      <h2 class="content__heading">Now Trending in Town</h2>
      <div id="restaurants" class="restaurants">
        ${this.renderSkeletonPlaceholders(8)}
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
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      errorContainer.style.display = 'none';
    } catch (error) {
      restaurantsContainer.innerHTML = '';
      errorContainer.style.display = 'block';
    }
  },

  renderSkeletonPlaceholders(count) {
    let placeholders = '';
    for (let i = 0; i < count; i++) {
      placeholders += `
        <div class="restaurant-card skeleton">
          <div class="restaurant-card__image-skeleton"></div>
          <div class="restaurant-card__content">
            <h3 class="restaurant-card__name">Restaurant Name</h3>
            <p class="restaurant-card__description">lorem ipsum lorem ipsum lorem ipsum</p>
            <p class="restaurant-card__city">City: ...</p>
            <p class="restaurant-card__rating">5</p>
          </div>
        </div>
      `;
    }
    return placeholders;
  },
};

export default Trending;
