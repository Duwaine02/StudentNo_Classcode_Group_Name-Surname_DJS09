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