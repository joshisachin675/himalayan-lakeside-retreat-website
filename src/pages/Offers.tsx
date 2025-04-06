
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { offerData } from "@/data/offerData";
import { Check, CalendarIcon } from "lucide-react";

const Offers = () => {
  return (
    <Layout>
      <PageHeader
        title="Special Offers & Packages"
        subtitle="Exclusive packages to enhance your Himalayan experience"
        backgroundImage="https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Exclusive Packages</h2>
            <p className="text-lg text-gray-700">
              Indulge in our specially curated packages designed to create unforgettable mountain experiences. From romantic getaways to adventure-filled holidays, we have something for everyone.
            </p>
          </div>

          <div className="space-y-16">
            {offerData.map((offer) => (
              <div
                id={`offer-${offer.id}`}
                key={offer.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 scroll-mt-24"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover"
                      style={{ minHeight: "300px" }}
                    />
                    {offer.tag && (
                      <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {offer.tag}
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-primary">{offer.title}</h3>
                    <p className="text-gray-700 mb-6">{offer.description}</p>
                    
                    <div className="flex items-center mb-4">
                      <CalendarIcon size={16} className="text-secondary mr-2" />
                      <span className="text-gray-600 text-sm">Valid until {new Date(offer.validUntil).toLocaleDateString()}</span>
                    </div>
                    
                    <h4 className="font-semibold text-primary mb-2">Package Includes:</h4>
                    <ul className="space-y-2 mb-6">
                      {offer.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <Check size={16} className="text-accent mr-2 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap items-center justify-between mt-auto pt-4 border-t">
                      <div className="mb-4 md:mb-0">
                        <p className="text-2xl font-bold text-primary">₹{offer.price.toLocaleString()}
                          {offer.originalPrice && (
                            <span className="text-sm line-through text-gray-500 ml-2">
                              ₹{offer.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </p>
                        {offer.originalPrice && (
                          <p className="text-sm text-secondary font-medium">
                            Save ₹{(offer.originalPrice - offer.price).toLocaleString()}
                          </p>
                        )}
                      </div>
                      <Link to="/booking">
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                          Book This Offer
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Offers */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Seasonal Offers</h2>
            <p className="text-lg text-gray-700">
              Take advantage of our limited-time seasonal offers and special promotions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SeasonalOfferCard
              title="Monsoon Magic"
              description="Experience the serene beauty of the Himalayas during monsoon with our special rainy season package."
              image="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              discount="15% Off"
              validUntil="Valid Jul - Sep 2025"
            />
            <SeasonalOfferCard
              title="Winter Wonderland"
              description="Enjoy cozy mountain views and special winter activities with our winter package."
              image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
              discount="20% Off"
              validUntil="Valid Nov - Feb 2026"
            />
            <SeasonalOfferCard
              title="Summer Escape"
              description="Beat the heat with a refreshing mountain retreat during the summer months."
              image="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
              discount="10% Off"
              validUntil="Valid Apr - Jun 2025"
            />
          </div>
        </div>
      </section>

      {/* Corporate Retreats */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Corporate Retreats</h2>
              <p className="text-lg mb-6 text-gray-700">
                Take your team to new heights with our corporate retreat packages. Our serene mountain setting provides the perfect backdrop for team building, strategic planning, and fostering creativity.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                We offer customized packages that include meeting facilities, team-building activities, special dining experiences, and comfortable accommodations to ensure a productive and memorable corporate retreat.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check size={18} className="text-accent mr-2 mt-1" />
                  <p className="text-gray-700">Modern meeting rooms with stunning views</p>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-accent mr-2 mt-1" />
                  <p className="text-gray-700">Customized team building activities</p>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-accent mr-2 mt-1" />
                  <p className="text-gray-700">Special group rates for accommodations</p>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-accent mr-2 mt-1" />
                  <p className="text-gray-700">Exclusive dining experiences</p>
                </div>
              </div>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Inquire About Corporate Retreats
                </Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205"
                alt="Corporate retreat"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Book Your Special Package?
            </h2>
            <p className="text-lg mb-8">
              Contact our reservations team for more information or to customize a package for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/booking">
                <Button className="bg-white text-primary hover:bg-white/90 text-lg">
                  Book Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface SeasonalOfferCardProps {
  title: string;
  description: string;
  image: string;
  discount: string;
  validUntil: string;
}

const SeasonalOfferCard: React.FC<SeasonalOfferCardProps> = ({
  title,
  description,
  image,
  discount,
  validUntil,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
          {discount}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-sm text-gray-600 mb-4">{validUntil}</p>
        <Link to="/contact">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white">
            Request Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Offers;
