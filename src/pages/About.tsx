
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";

const About = () => {
  return (
    <Layout>
      <PageHeader
        title="About Us"
        subtitle="Discover our story and connection to the beautiful Uttarakhand region"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945"
      />

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-lg mb-6 text-gray-700">
                The Himalayan Lakeside Retreat began as a dream to create a sanctuary where 
                travelers could experience the magical beauty of Uttarakhand's mountains and lakes 
                while enjoying world-class luxury and comfort.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Founded in 2005 by the Negi family, who have deep roots in the Nainital region, 
                our hotel was built with a profound respect for the natural environment and local 
                culture. The architecture draws inspiration from traditional Kumaoni designs while 
                incorporating modern luxury elements.
              </p>
              <p className="text-lg text-gray-700">
                Over the years, we have grown from a boutique property to a renowned luxury destination, 
                welcoming guests from around the world who seek to connect with the breathtaking 
                landscapes of the Himalayas while experiencing the warmth of Uttarakhandi hospitality.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
                alt="Hotel lobby"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7"
                alt="Hotel exterior view"
                className="absolute -bottom-10 -left-10 w-2/3 rounded-lg shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Vision</h2>
            <p className="text-xl mb-6 text-gray-700">
              To create extraordinary experiences that celebrate the natural splendor and cultural richness 
              of Uttarakhand, while providing unparalleled luxury and personalized service to every guest.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <ValueCard
                title="Authentic Experiences"
                description="We strive to provide genuine connections to the natural beauty and cultural heritage of Uttarakhand."
              />
              <ValueCard
                title="Sustainable Luxury"
                description="We believe luxury and environmental responsibility can coexist harmoniously."
              />
              <ValueCard
                title="Heartfelt Hospitality"
                description="We embrace the traditional Uttarakhandi spirit of treating guests as divine (Atithi Devo Bhava)."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Connection to Uttarakhand */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
                  alt="Himalayan mountains"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                  alt="Nainital lake"
                  className="rounded-lg shadow-lg mt-8 w-full h-auto"
                />
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Local wildlife"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <img
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
                  alt="Local temple"
                  className="rounded-lg shadow-lg mt-8 w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Connection to Uttarakhand</h2>
              <p className="text-lg mb-6 text-gray-700">
                Our deep bond with Uttarakhand shapes every aspect of our hotel experience. From the locally 
                sourced ingredients in our kitchens to the traditional art adorning our walls, we celebrate 
                the rich cultural tapestry of this magical region.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                We actively work with local communities to preserve and showcase traditional crafts, music, 
                and culinary techniques. Our guided tours and activities are designed to provide meaningful 
                insights into the natural wonders and cultural landmarks of the region.
              </p>
              <p className="text-lg text-gray-700">
                Through partnerships with local conservation efforts, we contribute to preserving the pristine 
                beauty of Uttarakhand's forests, lakes, and wildlife for generations to come. We believe that 
                responsible tourism can be a powerful force for positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Leadership Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Meet the dedicated professionals who work tirelessly to create memorable experiences for our guests.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              name="Vikram Negi"
              position="Founder & Managing Director"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a"
            />
            <TeamMember
              name="Ananya Rawat"
              position="General Manager"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
            />
            <TeamMember
              name="Ravi Sharma"
              position="Executive Chef"
              image="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5"
            />
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Commitment</h2>
            <p className="text-xl mb-12 text-gray-700">
              We are committed to providing exceptional experiences while honoring our responsibility 
              to the environment, local communities, and the rich cultural heritage of Uttarakhand.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <CommitmentCard
                title="Environmental Sustainability"
                items={[
                  "Energy-efficient building design",
                  "Water conservation initiatives",
                  "Waste reduction and recycling programs",
                  "Sourcing local and organic products"
                ]}
              />
              <CommitmentCard
                title="Community Engagement"
                items={[
                  "Employment opportunities for locals",
                  "Support for local artisans and suppliers",
                  "Educational partnerships with schools",
                  "Contribution to conservation projects"
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-4 text-primary">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-primary">{name}</h3>
        <p className="text-gray-600">{position}</p>
      </div>
    </div>
  );
};

interface CommitmentCardProps {
  title: string;
  items: string[];
}

const CommitmentCard: React.FC<CommitmentCardProps> = ({ title, items }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-left">
      <h3 className="text-xl font-bold mb-4 text-primary">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
