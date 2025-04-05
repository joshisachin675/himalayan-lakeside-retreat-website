
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import BookingSearchBar from "@/components/shared/BookingSearchBar";
import { Link } from "react-router-dom";
import { roomData } from "@/data/imageData";
import { offerData } from "@/data/offerData";
import { ArrowRight, Star } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')",
          }}
        >
          <div className="hero-overlay"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-2xl text-white animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Experience Luxury in the Heart of the Himalayas
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Discover serenity and grandeur at our lakeside retreat in Nainital,
                surrounded by breathtaking mountain views and pristine lakes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/rooms">
                  <Button className="bg-secondary text-white hover:bg-secondary/90 text-lg">
                    Explore Rooms
                  </Button>
                </Link>
                <Link to="/booking">
                  <Button className="bg-white text-primary hover:bg-white/90 text-lg">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Search Bar */}
      <section className="bg-primary py-12">
        <div className="container-custom">
          <BookingSearchBar />
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                A Luxurious Himalayan Retreat
              </h2>
              <p className="text-lg mb-6 text-gray-700">
                Nestled in the breathtaking landscapes of Nainital, our hotel offers an unparalleled blend of luxury and nature's splendor. Surrounded by the majestic Himalayan mountains and pristine lakes, we provide a sanctuary of comfort and elegance.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Each aspect of our hotel is designed to immerse you in the natural beauty of Uttarakhand while indulging in world-class amenities and warm hospitality that reflects the spirit of the region.
              </p>
              <Link to="/about">
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                alt="Hotel exterior"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd"
                alt="Hotel spa"
                className="rounded-lg shadow-lg mt-6 object-cover w-full h-full"
              />
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
                alt="Hotel restaurant"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
              <img
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7"
                alt="Hotel pool"
                className="rounded-lg shadow-lg mt-6 object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Luxurious Accommodations
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Immerse yourself in comfort and elegance with our thoughtfully designed rooms and suites, offering stunning views of the Himalayan landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomData.slice(0, 3).map((room) => (
              <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{room.name}</h3>
                  <div className="flex items-center mb-4 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-primary">₹{room.price.toLocaleString()}<span className="text-sm font-normal text-gray-600"> / night</span></p>
                    <Link to={`/rooms#room-${room.id}`}>
                      <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/rooms">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                View All Accommodations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Special Offers & Packages
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Enhance your stay with our specially curated packages and exclusive offers designed to create unforgettable experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerData.slice(0, 2).map((offer) => (
              <div key={offer.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 card-hover">
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-64 object-cover"
                  />
                  {offer.tag && (
                    <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {offer.tag}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{offer.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{offer.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {offer.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-bold text-primary">₹{offer.price.toLocaleString()}
                        {offer.originalPrice && (
                          <span className="text-sm line-through text-gray-500 ml-2">
                            ₹{offer.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-gray-500">Valid until {new Date(offer.validUntil).toLocaleDateString()}</p>
                    </div>
                    <Link to={`/offers#offer-${offer.id}`}>
                      <Button className="bg-secondary hover:bg-secondary/90 text-white">
                        View Offer
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/offers">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Explore All Offers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Uttarakhand */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
          }}
        >
          <div className="bg-black/50 absolute inset-0"></div>
        </div>

        <div className="relative container-custom text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Magic of Uttarakhand
            </h2>
            <p className="text-lg mb-8">
              Explore breathtaking mountains, serene lakes, ancient temples, and rich cultural heritage. Our hotel is the perfect base to discover the natural wonders of this beautiful region.
            </p>
            <Link to="/gallery">
              <Button className="bg-white text-primary hover:bg-white/90">
                Explore Uttarakhand Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Guest Experiences
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from our guests about their memorable stays at Himalayan Lakeside Retreat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The views from our room were absolutely breathtaking. Waking up to the sight of mountains and lakes every morning was unforgettable."
              author="Priya Sharma"
              location="Delhi"
            />
            <TestimonialCard
              quote="The staff went above and beyond to make our anniversary special. The romantic dinner by the lake was the highlight of our stay."
              author="Rahul and Meera"
              location="Mumbai"
            />
            <TestimonialCard
              quote="From the spa treatments to the guided hikes, every experience was exceptional. We'll definitely be returning soon!"
              author="James Wilson"
              location="London"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Begin Your Himalayan Journey
              </h2>
              <p className="text-lg mb-6">
                Book your stay at Himalayan Lakeside Retreat and experience the perfect blend of luxury and natural beauty. Special rates available for early bookings.
              </p>
              <Link to="/booking">
                <Button className="bg-white text-primary hover:bg-white/90 text-lg">
                  Book Your Stay Now <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
                alt="Luxury suite"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd"
                alt="Hotel spa"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  location,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex mb-4 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">{`"${quote}"`}</p>
      <div>
        <p className="font-semibold text-primary">{author}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
};

export default Index;
