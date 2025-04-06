
export interface OfferItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  validUntil: string;
  features: string[];
  tag?: string;
}

export const offerData: OfferItem[] = [
  {
    id: 1,
    title: "Romantic Himalayan Getaway",
    description: "Escape with your loved one to the serene mountains with our specially curated romantic package. Enjoy luxurious accommodations with stunning views, candlelit dinners, couple's spa treatments, and more.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    price: 25000,
    originalPrice: 35000,
    validUntil: "2025-12-31",
    tag: "Most Popular",
    features: [
      "2 nights in a Premium Lake View Suite",
      "Romantic candlelit dinner by the lake",
      "Couple's spa treatment",
      "Champagne and chocolate-covered strawberries on arrival",
      "Late checkout",
      "Breakfast in bed",
      "Guided sunset hike"
    ]
  },
  {
    id: 2,
    title: "Himalayan Adventure Package",
    description: "Experience the thrill of the mountains with our adventure package designed for nature enthusiasts. Explore the breathtaking landscapes of Uttarakhand with guided treks, water activities, and more.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    price: 22000,
    validUntil: "2025-09-30",
    features: [
      "3 nights in a Mountain View Room",
      "Guided trek to hidden mountain trails",
      "Boating on Sattal Lake",
      "Mountain biking excursion",
      "Packed lunch for excursions",
      "Daily breakfast and dinner",
      "Adventure equipment rental included"
    ]
  },
  {
    id: 3,
    title: "Wellness Retreat",
    description: "Rejuvenate your mind, body, and soul with our comprehensive wellness retreat. Immerse yourself in yoga, meditation, and spa treatments in the tranquil setting of the Himalayas.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    price: 30000,
    validUntil: "2025-11-30",
    features: [
      "4 nights in a Deluxe Mountain View Room",
      "Daily yoga and meditation sessions",
      "Two personalised spa treatments",
      "Ayurvedic consultation",
      "Healthy meals prepared with local organic ingredients",
      "Guided forest meditation walks",
      "Herbal tea tasting session"
    ]
  },
  {
    id: 4,
    title: "Family Fun Package",
    description: "Create lasting memories with your family in the stunning landscapes of Uttarakhand. This package is designed to offer something for everyone, from children to adults.",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843",
    price: 28000,
    originalPrice: 35000,
    validUntil: "2025-10-31",
    features: [
      "3 nights in a Family Suite",
      "Kids' adventure activities",
      "Family picnic by the lake",
      "Bonfire with marshmallows",
      "Nature scavenger hunt",
      "Complimentary meals for children under 12",
      "Family photo session with the mountains as backdrop"
    ]
  }
];
