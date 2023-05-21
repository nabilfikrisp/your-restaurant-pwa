import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import CONFIG from '../../globals/config';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async handleReviewSubmit(event) {
    event.preventDefault();

    // Collect form data
    const nameInput = document.querySelector('#review-name');
    const reviewInput = document.querySelector('#review-content');
    const reviewId = document.querySelector('#review-id');
    const reviewData = {
      id: reviewId.value,
      name: nameInput.value,
      review: reviewInput.value,
    };

    // Call the sendReview method to send the review data
    // console.log(reviewData);
    Detail.sendReview(reviewData);
    nameInput.value = '';
    reviewInput.value = '';

    await Detail.renderRestaurantDetail();
  },

  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    await this.renderRestaurantDetail();

    const storeReview = document.querySelector('#add-review__submit');
    storeReview.addEventListener('click', this.handleReviewSubmit);
  },

  async renderRestaurantDetail() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },

  async sendReview(reviewData) {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error('Failed to send review');
      }

      const data = await response.json();
      console.log('Review sent successfully:', data);
      // Perform any additional actions or handle the response as needed
    } catch (error) {
      console.error('Error sending review:', error);
      // Handle the error gracefully or display an error message to the user
    }
  },
};

export default Detail;
