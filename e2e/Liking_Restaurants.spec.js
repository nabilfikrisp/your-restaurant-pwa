/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked Restaurants', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('Liking one restaurant', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/#/');
  I.waitForElement('.restaurants a');
  I.click(locate('.restaurants a').first());
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-card');
});

Scenario('Unlike one restaurant', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/#/');
  I.waitForElement('.restaurants a');
  I.click(locate('.restaurants a').first());
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-card');
  I.waitForElement('.restaurants a');
  I.click(locate('.restaurants a').first());
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/#/');
  I.fillField('#search-bar', 'pizza');
  I.click('#search-btn');
  I.see('Restoran yang anda cari tidak ada', '.restaurant-item__not__found');
  I.fillField('#search-bar', 'kafe');
  I.click('#search-btn');
  I.waitForElement('.restaurants a');
});
