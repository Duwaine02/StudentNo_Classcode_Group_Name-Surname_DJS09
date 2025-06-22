// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : 

function addNumbers (a:number, b:number):number {
  return a + b

}

console.log(addNumbers(5,6))


type Review = {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}


const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

const reviewTotalDisplay = document.querySelector("#reviews") as  HTMLElement;
const returningUserDisplay = document.querySelector("#returning-user") as  HTMLElement ;
const userNameDisplay = document.querySelector("#user") as  HTMLElement ;
const propertyListDisplay = document.querySelector("#property-list") as HTMLElement;
const locationTimeDisplay = document.querySelector("#location-time") as HTMLElement;
if (reviewTotalDisplay) {
  reviewTotalDisplay.innerHTML = `${reviews.length} reviews`;
} else {
  console.warn("Element with ID 'reviews' not found!");
}


function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : '';
    if (reviewTotalDisplay) {
        reviewTotalDisplay.innerHTML = `review total ${value} | last reviewed by ${reviewer} ${iconDisplay}`;
    } else {
        console.warn("Element with ID 'reviews' not found!");
    }
}

if (reviews.length > 0) {
  const lastReview = reviews[reviews.length - 1];
  showReviewTotal(reviews.length, lastReview.name, lastReview.loyaltyUser);
}

if (userNameDisplay && reviews.length > 0) {
  userNameDisplay.innerHTML = reviews[reviews.length - 1].name;
}

if (returningUserDisplay && reviews.length > 0) {
  returningUserDisplay.innerHTML = reviews[reviews.length - 1].loyaltyUser
    ? "back"
    : "New User";
}

const properties = [
  { name: "Colombian Shack", price: "45/night", image: "https://www.hrw.org/sites/default/files/multimedia_images_2017/201710americas_colombia_guajira.jpg" },
  { name: "Polish Cottage", price: "34/night", image: "https://static01.nyt.com/images/2020/08/30/realestate/26IHH-POLAND-slide-NZC6/26IHH-POLAND-slide-NZC6-superJumbo.jpg?quality=75&auto=webp" },
  { name: "London Flat", price: "23/night", image: "https://www.knightfrank.com/globalassets/the-view-images/london-apartments-with-gardens/little-venice-1.jpg" },
];

if (propertyListDisplay) {
  propertyListDisplay.innerHTML = properties.map(property => `
    <div class="property-card">
      <img src="${property.image}" alt="${property.name}">
      <p>${property.name}</p>
      <p>${property.price}</p>
    </div>
  `).join('');
} else {
  console.warn("Element with ID 'property-list' not found!");
}