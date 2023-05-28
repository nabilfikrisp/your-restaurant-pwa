import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Favorite Restaurant</h2>
      <div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>
      <div id="restaurants" class="restaurants">
      
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
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

export default Favorite;
