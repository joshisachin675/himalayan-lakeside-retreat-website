
export interface ImageItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description?: string;
}

export const imageGallery: ImageItem[] = [
  // Mountains
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "Himalayan mountain range",
    category: "mountains",
    title: "Himalayan Peaks",
    description: "Majestic mountain ranges surrounding Nainital"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Sun rays on mountains",
    category: "mountains",
    title: "Morning Sunrays",
    description: "Beautiful sunrise over the mountain peaks"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    alt: "Foggy mountain range",
    category: "mountains",
    title: "Misty Mountains",
    description: "Foggy mountain peaks creating a mystical atmosphere"
  },
  
  // Lakes
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    alt: "Nainital lake view",
    category: "lakes",
    title: "Naini Lake",
    description: "The beautiful Naini Lake surrounded by mountains"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1580100586938-02822d99c4a8",
    alt: "Bhimtal Lake",
    category: "lakes",
    title: "Bhimtal Lake",
    description: "Serene views of Bhimtal Lake at sunset"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6",
    alt: "Sattal Lake",
    category: "lakes",
    title: "Sattal Lake",
    description: "The interconnected seven lakes of Sattal"
  },
  
  // Temples
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    alt: "Naina Devi Temple",
    category: "temples",
    title: "Naina Devi Temple",
    description: "Ancient temple dedicated to Goddess Naina Devi"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1609951651556-5334e2706168",
    alt: "Hanuman Garhi Temple",
    category: "temples",
    title: "Hanuman Garhi Temple",
    description: "Temple with panoramic views of the city"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1604693889236-b8de04f636f1",
    alt: "Mukteshwar Temple",
    category: "temples",
    title: "Mukteshwar Temple",
    description: "Ancient temple dedicated to Lord Shiva"
  },
  
  // Hotel
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    alt: "Hotel exterior",
    category: "hotel",
    title: "Hotel Exterior",
    description: "Elegant facade of our Himalayan retreat"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    alt: "Luxury suite",
    category: "hotel",
    title: "Mountain View Suite",
    description: "Our premium suite with panoramic views"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    alt: "Hotel restaurant",
    category: "hotel",
    title: "The Himalayan Restaurant",
    description: "Fine dining with a view of the mountains"
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    alt: "Hotel spa",
    category: "hotel",
    title: "Wellness Spa",
    description: "Relaxing treatments in our mountain spa"
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    alt: "Hotel lobby",
    category: "hotel",
    title: "Grand Lobby",
    description: "Warm welcome in our elegant lobby"
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
    alt: "Hotel pool",
    category: "hotel",
    title: "Infinity Pool",
    description: "Swim with a view of the mountains"
  }
];

export const roomData = [
  {
    id: 1,
    name: "Deluxe Mountain View Room",
    description: "Immerse yourself in the beauty of the Himalayas with our Deluxe Mountain View Room, offering breathtaking panoramas of the majestic peaks.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    price: 12000,
    capacity: "2 Adults",
    size: "400 sq ft",
    bedType: "King Size Bed",
    amenities: ["Mountain View", "Air Conditioning", "Mini Bar", "Free WiFi", "Room Service", "Flat-screen TV"]
  },
  {
    id: 2,
    name: "Premium Lake View Suite",
    description: "Experience luxury with our Premium Lake View Suite, offering stunning views of Naini Lake and the surrounding mountains, perfect for a romantic getaway.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    price: 18000,
    capacity: "2 Adults + 1 Child",
    size: "650 sq ft",
    bedType: "King Size Bed",
    amenities: ["Lake View", "Air Conditioning", "Mini Bar", "Free WiFi", "Private Balcony", "Bathtub", "Room Service", "Flat-screen TV"]
  },
  {
    id: 3,
    name: "Family Suite",
    description: "Perfect for families, our spacious Family Suite offers separate living and sleeping areas with all the comforts of home and stunning mountain views.",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843",
    price: 20000,
    capacity: "2 Adults + 2 Children",
    size: "800 sq ft",
    bedType: "King Size Bed + Twin Beds",
    amenities: ["Mountain View", "Air Conditioning", "Mini Bar", "Free WiFi", "Living Room", "Room Service", "Flat-screen TV", "Bathtub"]
  },
  {
    id: 4,
    name: "Royal Himalayan Suite",
    description: "Our most luxurious accommodation, the Royal Himalayan Suite offers unparalleled luxury with panoramic views, a private terrace, and personalized butler service.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    price: 35000,
    capacity: "2 Adults",
    size: "1200 sq ft",
    bedType: "King Size Bed",
    amenities: ["Panoramic View", "Private Terrace", "Butler Service", "Air Conditioning", "Mini Bar", "Free WiFi", "Living Room", "Dining Area", "Jacuzzi", "Room Service", "Flat-screen TV"]
  }
];

export const diningData = [
  {
    id: 1,
    name: "The Himalayan Kitchen",
    description: "Experience authentic Kumaoni cuisine with a modern twist at our signature restaurant. Our chefs use locally sourced ingredients to create dishes that celebrate the rich culinary heritage of Uttarakhand.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    cuisine: "Regional Himalayan",
    hours: "7:00 AM - 11:00 PM",
    dressCode: "Smart Casual"
  },
  {
    id: 2,
    name: "Lakeside Pavilion",
    description: "Dine with breathtaking views of the lake and mountains at our open-air pavilion. Perfect for romantic dinners and special occasions, with a menu featuring continental favorites and local specialties.",
    image: "https://images.unsplash.com/photo-1613274554329-70f997ae9a27",
    cuisine: "Continental & Indian",
    hours: "12:00 PM - 10:30 PM",
    dressCode: "Smart Casual"
  },
  {
    id: 3,
    name: "Mountain View Bar",
    description: "Unwind with handcrafted cocktails and premium spirits at our elegant bar offering stunning mountain views. The perfect place to relax after a day of exploration.",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330",
    cuisine: "Bar Snacks & Appetizers",
    hours: "4:00 PM - 12:00 AM",
    dressCode: "Casual"
  },
  {
    id: 4,
    name: "Tea Lounge",
    description: "Savor the finest selection of Himalayan teas and freshly baked pastries in our cozy lounge. The perfect spot for afternoon tea or a quiet meeting.",
    image: "https://images.unsplash.com/photo-1551630844-e7d4732bf418",
    cuisine: "Tea & Light Snacks",
    hours: "9:00 AM - 8:00 PM",
    dressCode: "Casual"
  }
];

export const facilitiesData = [
  {
    id: 1,
    name: "Himalayan Spa",
    description: "Rejuvenate your body and mind with our signature spa treatments inspired by ancient Himalayan healing traditions.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    features: ["Ayurvedic Treatments", "Mountain Herb Therapies", "Couple's Massage", "Steam Room", "Meditation Classes"]
  },
  {
    id: 2,
    name: "Infinity Pool",
    description: "Take a refreshing dip in our temperature-controlled infinity pool while enjoying breathtaking views of the mountains.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
    features: ["Heated Pool", "Mountain Views", "Poolside Service", "Sun Loungers", "Towel Service"]
  },
  {
    id: 3,
    name: "Fitness Center",
    description: "Maintain your fitness routine with our state-of-the-art equipment and personal training services.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    features: ["Modern Equipment", "Personal Trainers", "Yoga Classes", "Mountain View", "24/7 Access"]
  },
  {
    id: 4,
    name: "Conference & Events",
    description: "Host memorable meetings and events in our versatile venues with stunning natural backdrops.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    features: ["Multiple Venues", "Modern AV Equipment", "Event Planning Services", "Catering", "Customizable Setups"]
  },
  {
    id: 5,
    name: "Adventure Desk",
    description: "Explore the beauty of Uttarakhand with our curated excursions and adventure activities.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    features: ["Guided Hikes", "Boating", "Bird Watching", "Cultural Tours", "Personalized Itineraries"]
  }
];
