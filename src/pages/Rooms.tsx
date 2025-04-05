
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { roomData } from "@/data/imageData";
import { Check } from "lucide-react";

const Rooms = () => {
  return (
    <Layout>
      <PageHeader
        title="Rooms & Suites"
        subtitle="Luxury accommodations with breathtaking mountain and lake views"
        backgroundImage="https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Accommodations</h2>
            <p className="text-lg text-gray-700">
              Experience the perfect blend of luxury, comfort, and natural beauty with our thoughtfully designed rooms and suites, each offering spectacular views of the Himalayan landscape.
            </p>
          </div>

          <div className="space-y-16">
            {roomData.map((room, index) => (
              <div 
                id={`room-${room.id}`} 
                key={room.id} 
                className="grid md:grid-cols-2 gap-8 items-center scroll-mt-24"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">{room.name}</h3>
                  <p className="text-lg mb-6 text-gray-700">{room.description}</p>
                  
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-6">
                    <DetailItem label="Room Size" value={room.size} />
                    <DetailItem label="Occupancy" value={room.capacity} />
                    <DetailItem label="Bed Type" value={room.bedType} />
                    <DetailItem label="Price" value={`₹${room.price.toLocaleString()} / night`} />
                  </div>
                  
                  <h4 className="font-semibold text-primary mb-3">Room Amenities</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-6">
                    {room.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center text-gray-700">
                        <Check size={16} className="text-accent mr-2" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link to="/booking">
                      <Button className="bg-primary hover:bg-primary/90 text-white">
                        Book Now
                      </Button>
                    </Link>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      View Gallery
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary text-center">Room Policies</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <PolicyCard
                title="Check-in & Check-out"
                items={[
                  "Check-in: 2:00 PM",
                  "Check-out: 12:00 PM",
                  "Early check-in/late check-out available on request (charges may apply)",
                  "Photo ID required at check-in"
                ]}
              />
              
              <PolicyCard
                title="Cancellation Policy"
                items={[
                  "Free cancellation up to 72 hours before arrival",
                  "Cancellation within 72 hours: 1 night charge",
                  "No-show: 100% of reservation value",
                  "Peak season bookings may have special terms"
                ]}
              />
              
              <PolicyCard
                title="Child Policy"
                items={[
                  "Children 5 years and under stay free",
                  "Children 6-12 years: ₹2,000 per child per night",
                  "Extra bed: ₹3,000 per night",
                  "Maximum 2 children per room"
                ]}
              />
              
              <PolicyCard
                title="Other Policies"
                items={[
                  "No pets allowed (service animals exempt)",
                  "All rooms are non-smoking",
                  "Room service available 24/7",
                  "Safe deposit boxes available in all rooms"
                ]}
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
              Reserve Your Mountain Getaway
            </h2>
            <p className="text-lg mb-8">
              Experience the ultimate in Himalayan luxury. Book your stay today and create memories to last a lifetime.
            </p>
            <Link to="/booking">
              <Button className="bg-white text-primary hover:bg-white/90 text-lg">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface DetailItemProps {
  label: string;
  value: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => {
  return (
    <div>
      <span className="text-gray-600 font-medium">{label}:</span>{" "}
      <span className="text-gray-800">{value}</span>
    </div>
  );
};

interface PolicyCardProps {
  title: string;
  items: string[];
}

const PolicyCard: React.FC<PolicyCardProps> = ({ title, items }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-primary">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
