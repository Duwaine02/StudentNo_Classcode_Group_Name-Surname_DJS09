
export const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement | null;
export const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement | null;
export const userNameDisplay = document.querySelector('#user') as HTMLElement | null;
export const propertyListDisplay = document.querySelector('#property-list') as HTMLElement | null;
export const locationTimeDisplay = document.querySelector('#location-time') as HTMLElement | null;

export enum Permissions {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
}

export enum LoyaltyUser {
  GOLD_USER = 'GOLD_USER',
  SILVER_USER = 'SILVER_USER',
  BRONZE_USER = 'BRONZE_USER',
}

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
  const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? '⭐' : '';
  if (reviewTotalDisplay) {
    reviewTotalDisplay.innerHTML = `${value} review${makeMultiple(value)} | last reviewed by ${reviewer} ${iconDisplay}`;
  } else {
    console.warn("Element with ID 'reviews' not found!");
  }
}

export function populateUser(isReturning: boolean, userName: string) {
  if (returningUserDisplay && isReturning) {
    returningUserDisplay.innerHTML = 'Welcome back';
  }
  if (userNameDisplay) {
    userNameDisplay.innerHTML = ` ${userName}`; 
  }
}

export function showDetails(value: boolean | Permissions, element: HTMLDivElement, price: number) {
  if (value) {
    const priceDisplay = document.createElement('div');
    priceDisplay.innerHTML = `${price}/night`;
    element.appendChild(priceDisplay);
  }
}

export function makeMultiple(value: number): string {
  if (value > 1) {
    return 's';
  }
  return '';
}

export function getTopTwoReviews(reviews: Review[]): Review[] {
  return [...reviews].sort((a, b) => b.stars - a.stars).slice(0, 2);
}

export type Price = 25 | 30 | 45;
export type Country = 'Colombia' | 'Poland' | 'United Kingdom';