import API_ENDPOINT from '../globals/api-endpoints';

class RestaurantSource {
  static async trendingRestaurants() {
    const response = await fetch(API_ENDPOINT.TRENDING);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantSource;
