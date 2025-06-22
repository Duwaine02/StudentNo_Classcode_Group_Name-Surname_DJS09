// Number Types mini-challenge: Still works perfectly!
function addNumbers(a: number, b: number): number {
  return a + b;
}
console.log(addNumbers(5, 6)); 

import {
  showReviewTotal,
  populateUser,
  showDetails,
  getTopTwoReviews,
  Review,
  Permissions,
  LoyaltyUser,
  propertyListDisplay,
  reviewTotalDisplay,
  returningUserDisplay,
  userNameDisplay,
  locationTimeDisplay,
} from './utils';


  
  const getReviewsButton = document.querySelector('#get-reviews') as HTMLButtonElement | null;
  const reviewImage = document.querySelector('#review-image') as HTMLImageElement | null;


const reviews: Review[] = [
  { name: 'Sheia', stars: 5, loyaltyUser: LoyaltyUser.GOLD_USER, date: '01-04-2021' },
  { name: 'Andrzej', stars: 3, loyaltyUser: LoyaltyUser.BRONZE_USER, date: '28-03-2021' },
  { name: 'Omar', stars: 4, loyaltyUser: LoyaltyUser.SILVER_USER, date: '27-03-2021' },
];

const you = {
  firstName: 'Duwaine',
  lastName: 'Julies',
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
};

const properties = [
  { name: 'Colombian Shack', price: 45, image: 'https://images.squarespace-cdn.com/content/v1/52c9f4ebe4b02c7007cdd86a/1629724188728-I66NW6J5AK8NBK7VNPNT/calanoa+2.jpg?format=1000w' }, 
  { name: 'Polish Cottage', price: 34, image: 'https://www.shutterstock.com/shutterstock/photos/277955645/display_1500/stock-photo-traditional-polish-cottage-house-277955645.jpg' }, 
  { name: 'London Flat', price: 23, image: 'https://static01.nyt.com/images/2020/08/30/realestate/26IHH-POLAND-slide-NZC6/26IHH-POLAND-slide-NZC6-superJumbo.jpg?quality=75&auto=webp&disable=upscale' }, 
];

if (reviewImage) {
  reviewImage.src = 'https://ephemeralnewyork.wordpress.com/wp-content/uploads/2017/12/cottagegreenwichstreetnyt.png?w=450&h=309'; 
  reviewImage.alt = 'A banner for reviews';
} else {
  console.warn("Element with ID 'review-image' not found!");
}

if (propertyListDisplay) {
  propertyListDisplay.innerHTML = properties.map(property => `
    <div class="property-card">
      <img src="${property.image}" alt="${property.name}">
      <p>${property.name}</p>
      <p>${property.price}/per night</p>
    </div>
  `).join('');
} else {
  console.warn("Element with ID 'property-list' not found!");
}

showReviewTotal(reviews.length, reviews[reviews.length - 1].name, reviews[reviews.length - 1].loyaltyUser);
populateUser(you.isReturning, you.firstName);



let count = 0;
function addReviews(array: Review[]): void {
  if (!count && reviewTotalDisplay) {
    count++;
    const topTwo = getTopTwoReviews(array);
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement('div');
      card.classList.add('review-card');
      card.innerHTML = `${topTwo[i].stars} stars from ${topTwo[i].name}`;
      reviewTotalDisplay.parentElement?.insertBefore(card, reviewTotalDisplay.nextSibling);
    }
  }
}

if (getReviewsButton) {
  getReviewsButton.addEventListener('click', () => addReviews(reviews));
} else {
  console.warn("Element with ID 'get-reviews' not found!");
}

if (returningUserDisplay) {
  console.log('returningUserDisplay is available:', returningUserDisplay.innerHTML);
}
if (userNameDisplay) {
  console.log('userNameDisplay is available:', userNameDisplay.innerHTML);
}

const now = new Date();
const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
const time = now.toLocaleTimeString('en-ZA', options); 
const location = 'London'; 
if (locationTimeDisplay) {
  locationTimeDisplay.innerHTML = `${location} ${time.replace(' ', '')}'`; 
} else {
  console.warn("Element with ID 'location-time' not found!");
}