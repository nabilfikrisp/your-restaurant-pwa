import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <div>
      <img class="restaurant-detail__image lazyload" src="./images/hero-image_1-xs.jpg" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}">
      <section class="add-review">
        <h3 class="add-review__title">Add a Review</h3>
        <a class="add-review__form" id="store-review">
          <div class="add-review__form-group">
            <label for="review-name" class="add-review__label">Name:</label>
            <input type="text" id="review-name" name="review-name" class="add-review__input" placeholder="Enter your name" required>
            <input type="text" value="${restaurant.id}" name="review-id" id="review-id" hidden>
          </div>
          <div class="add-review__form-group">
            <label for="review-content" class="add-review__label">Review:</label>
            <textarea id="review-content" name="review-content" class="add-review__textarea" placeholder="Write your review" required></textarea>
          </div>
          <div class="add-review__form-group">
            <button class="add-review__submit" id="add-review__submit">Submit Review</button>
          </div>
        </a>
      </section>    
    </div>
    <div class="restaurant-detail__content">
      <div class="restaurant-detail__header">
        <h2 class="restaurant-detail__name">${restaurant.name}</h2>
      </div>
      <p class="restaurant-detail__description">${restaurant.description}</p>
      <p class="restaurant-detail__location">Location: ${restaurant.city}</p>
      <p class="restaurant-detail__address">Address: ${restaurant.address}</p>
      <h3 class="restaurant-detail__categories">Categories:</h3>
      <ul class="restaurant-detail__categories-list">
        ${Object.keys(restaurant.categories).map((key) => (
    `<li>${restaurant.categories[key].name}</li>`
  )).join('')}
      </ul>
      <h3 class="restaurant-detail__menus">Menus:</h3>
      <div class="restaurant-detail__foods">
        <h4>Foods:</h4>
        <ul>
        ${Object.keys(restaurant.menus.foods).map((key) => (
    `<li>${restaurant.menus.foods[key].name}</li>`
  )).join('')}
        </ul>
      </div>
      <div class="restaurant-detail__drinks">
        <h4>Drinks:</h4>
        <ul>
        ${Object.keys(restaurant.menus.drinks).map((key) => (
    `<li>${restaurant.menus.drinks[key].name}</li>`
  )).join('')}
        </ul>
      </div>
      <div class="restaurant-detail__rating">
        <span class="restaurant-detail__rating-text">Rating:</span>
        <span class="restaurant-detail__rating-value">${restaurant.rating}</span>
        <span class="restaurant-detail__rating-star">&#9733;</span>
      </div>
      <h3 class="restaurant-detail__reviews">Reviews:</h3>
      <div class="restaurant-detail__reviews-container">
        <h3 class="restaurant-detail__section-title">Customer Reviews</h3>
        ${Object.keys(restaurant.customerReviews).map((key) => (
    `<ul class="restaurant-detail__review-list">
          <li class="restaurant-detail__review-item">
            <div class="restaurant-detail__review-meta">
              <div class="restaurant-detail__review-header">
                <span class="restaurant-detail__review-name">${restaurant.customerReviews[key].name}</span>
                <span class="restaurant-detail__review-date">${restaurant.customerReviews[key].date}</span>
              </div>
            </div>
            <p class="restaurant-detail__review-content">${restaurant.customerReviews[key].review}</p>
          </li>
        </ul>`
  )).join('')}
      </div>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <a class="restaurant-card" href="#/detail/${restaurant.id}">
    <img height="200px" preload="" class="restaurant-card__image lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}" preload>
    <div class="restaurant-card__content">
      <h3 class="restaurant-card__name">${restaurant.name}</h3>
      <p class="restaurant-card__description">${restaurant.description}</p>
      <p class="restaurant-card__city">City: ${restaurant.city}</p>
      <p class="restaurant-card__rating">Rating: ${restaurant.rating}</p>
    </div>
  </a>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLoadingIcon = () => `<div class="loading-icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<path d="M12 3a9 9 0 1 0 9 9"></path>
</svg></div>`;

export {
  createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate, createLoadingIcon,
};
