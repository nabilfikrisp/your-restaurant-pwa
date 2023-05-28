import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Search = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Search for a Restaurant</h2>
      <div class="restaurant-item__not__found">Restoran yang anda cari tidak ada</div>
      <div id="restaurants" class="restaurants">
      </div>
    </div>
  `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.searchRestaurant(url.id);

    const restaurantsContainer = document.querySelector('#restaurants');
    const notFoundMessage = document.querySelector('.restaurant-item__not__found');
    if (restaurants.length === 0) {
      notFoundMessage.style.display = 'block';
      restaurantsContainer.style.display = 'none';
    } else {
      notFoundMessage.style.display = 'none';
      restaurantsContainer.style.display = 'grid';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Search;
