
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { facilitiesData } from "@/data/imageData";
import { Check } from "lucide-react";

const Facilities = () => {
  return (
    <Layout>
      <PageHeader
        title="Facilities & Amenities"
        subtitle="Experience luxury and comfort in the heart of the Himalayas"
        backgroundImage="https://images.unsplash.com/photo-1582719508461-905c673771fd"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Hotel Facilities</h2>
            <p className="text-lg text-gray-700">
              Indulge in our world-class facilities designed to enhance your mountain retreat experience. From rejuvenating spa treatments to thrilling adventure activities, we offer everything you need for an unforgettable stay.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  All Facilities
                </TabsTrigger>
                <TabsTrigger value="wellness" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Wellness
                </TabsTrigger>
                <TabsTrigger value="recreation" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Recreation
                </TabsTrigger>
                <TabsTrigger value="events" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Events
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="space-y-16">
                {facilitiesData.map((facility, index) => (
                  <FacilityItem key={facility.id} facility={facility} index={index} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="wellness">
              <div className="space-y-16">
                {facilitiesData
                  .filter(facility => ["Himalayan Spa", "Fitness Center"].includes(facility.name))
                  .map((facility, index) => (
                    <FacilityItem key={facility.id} facility={facility} index={index} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="recreation">
              <div className="space-y-16">
                {facilitiesData
                  .filter(facility => ["Infinity Pool", "Adventure Desk"].includes(facility.name))
                  .map((facility, index) => (
                    <FacilityItem key={facility.id} facility={facility} index={index} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="space-y-16">
                {facilitiesData
                  .filter(facility => ["Conference & Events"].includes(facility.name))
                  .map((facility, index) => (
                    <FacilityItem key={facility.id} facility={facility} index={index} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Additional Amenities</h2>
            <p className="text-lg text-gray-700 mb-12">
              Every detail of your stay has been thoughtfully considered to ensure maximum comfort and convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AmenityCard
              title="Hotel Services"
              items={[
                "24-hour front desk",
                "Concierge service",
                "Daily housekeeping",
                "Laundry service",
                "Currency exchange",
                "Airport transfers",
                "24-hour security"
              ]}
            />
            
            <AmenityCard
              title="In-Room Amenities"
              items={[
                "High-speed Wi-Fi",
                "Smart TV with streaming",
                "Premium bedding",
                "Electronic safe",
                "Mini fridge & minibar",
                "Tea/coffee making facilities",
                "Luxury toiletries"
              ]}
            />
            
            <AmenityCard
              title="Guest Conveniences"
              items={[
                "Complimentary parking",
                "Electric vehicle charging",
                "Accessible facilities",
                "Gift shop",
                "Babysitting service",
                "Doctor on call",
                "Luggage storage"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Nature Activities */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Explore Uttarakhand</h2>
              <p className="text-lg mb-6 text-gray-700">
                Our hotel is the perfect base to discover the natural wonders of Uttarakhand. Our experienced guides can help you explore the region's breathtaking mountains, pristine lakes, and rich cultural heritage.
              </p>
              <div className="space-y-4 mb-8">
                <ActivityItem title="Guided Mountain Treks" description="Explore scenic trails with experienced local guides." />
                <ActivityItem title="Lake Excursions" description="Visit the serene lakes of Bhimtal, Sattal, and Khurpatal." />
                <ActivityItem title="Birdwatching Tours" description="Spot rare Himalayan bird species with expert ornithologists." />
                <ActivityItem title="Temple Heritage Tours" description="Discover ancient temples and their spiritual significance." />
                <ActivityItem title="Village Walks" description="Experience the authentic culture of traditional Kumaoni villages." />
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-white">
                View All Activities
              </Button>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                  alt="Mountain trek" 
                  className="rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" 
                  alt="Lake view" 
                  className="rounded-lg shadow-lg mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9" 
                  alt="Forest walk" 
                  className="rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da" 
                  alt="Temple visit" 
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Our Facilities?
            </h2>
            <p className="text-lg mb-8">
              Book your stay at Himalayan Lakeside Retreat and enjoy all our world-class amenities and services.
            </p>
            <Button className="bg-white text-primary hover:bg-white/90 text-lg">
              Book Your Stay
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface FacilityItemProps {
  facility: {
    id: number;
    name: string;
    description: string;
    image: string;
    features: string[];
  };
  index: number;
}

const FacilityItem: React.FC<FacilityItemProps> = ({ facility, index }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className={index % 2 === 0 ? "order-1" : "order-2"}>
        <img
          src={facility.image}
          alt={facility.name}
          className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3]"
        />
      </div>
      <div className={index % 2 === 0 ? "order-2" : "order-1"}>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">{facility.name}</h3>
        <p className="text-lg mb-6 text-gray-700">{facility.description}</p>
        
        <h4 className="font-semibold text-primary mb-3">Features & Services</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
          {facility.features.map((feature, i) => (
            <div key={i} className="flex items-center text-gray-700">
              <Check size={16} className="text-accent mr-2" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

interface AmenityCardProps {
  title: string;
  items: string[];
}

const AmenityCard: React.FC<AmenityCardProps> = ({ title, items }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-primary">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <Check size={16} className="text-accent mr-2" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ActivityItemProps {
  title: string;
  description: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm">
      <h4 className="font-semibold text-primary">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Facilities;
