
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { diningData } from "@/data/imageData";
import { Clock, Utensils } from "lucide-react";

const Dining = () => {
  return (
    <Layout>
      <PageHeader
        title="Dining & Restaurants"
        subtitle="Savor exquisite cuisine with breathtaking mountain and lake views"
        backgroundImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Culinary Experiences</h2>
            <p className="text-lg text-gray-700">
              Immerse yourself in a world of flavor at our exquisite dining venues, where locally-inspired cuisine meets international excellence against the backdrop of the majestic Himalayas.
            </p>
          </div>

          <div className="space-y-16">
            {diningData.map((venue, index) => (
              <div 
                key={venue.id} 
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">{venue.name}</h3>
                  <p className="text-lg mb-6 text-gray-700">{venue.description}</p>
                  
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center">
                      <Utensils size={18} className="text-secondary mr-2" />
                      <span className="text-gray-700">{venue.cuisine}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={18} className="text-secondary mr-2" />
                      <span className="text-gray-700">{venue.hours}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-sm text-gray-600">Dress Code: {venue.dressCode}</p>
                  </div>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      View Menu
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Reserve a Table
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Philosophy */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Culinary Philosophy</h2>
              <p className="text-lg mb-6 text-gray-700">
                At Himalayan Lakeside Retreat, we believe that dining is an integral part of the travel experience. Our culinary philosophy centers on celebrating local flavors while incorporating global techniques and presentations.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Our executive chef and culinary team work closely with local farmers and producers to source the freshest seasonal ingredients, many of which are grown in our own organic garden. This farm-to-table approach ensures that our guests experience the authentic tastes of Uttarakhand.
              </p>
              <p className="text-lg text-gray-700">
                From traditional Kumaoni dishes to international favorites, every meal is prepared with passion and attention to detail, creating memorable dining experiences that complement the natural beauty surrounding our retreat.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1556911073-38141963c9e0" 
                  alt="Chef preparing food" 
                  className="rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1551218372-a8789b81b253" 
                  alt="Organic produce" 
                  className="rounded-lg shadow-lg mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1630175858469-1b8f4c2522ee" 
                  alt="Mountain herbs" 
                  className="rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1574484284002-952d92456975" 
                  alt="Traditional dish" 
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Dining Experiences */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Special Dining Experiences</h2>
            <p className="text-lg text-gray-700">
              Beyond our restaurants, we offer unique dining experiences that allow you to connect with the spectacular natural setting of our retreat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <SpecialDiningCard
              title="Private Lakeside Dinner"
              description="An intimate candlelit dinner by Naini Lake, with personalized menu and dedicated service."
              image="https://images.unsplash.com/photo-1551016126-56c00bbf8b0d"
            />
            <SpecialDiningCard
              title="Himalayan Picnic"
              description="A gourmet picnic basket to enjoy amidst scenic mountain trails and meadows."
              image="https://images.unsplash.com/photo-1526887520775-4b14b8aed897"
            />
            <SpecialDiningCard
              title="Chef's Table Experience"
              description="An exclusive culinary journey with our executive chef featuring seasonal tasting menus."
              image="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Reserve Your Dining Experience
            </h2>
            <p className="text-lg mb-8">
              Enhance your stay with unforgettable culinary experiences. Make your reservation today.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface SpecialDiningCardProps {
  title: string;
  description: string;
  image: string;
}

const SpecialDiningCard: React.FC<SpecialDiningCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Dining;
