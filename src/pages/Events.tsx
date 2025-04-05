
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const Events = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent",
      description: "We'll contact you shortly to discuss your event requirements.",
    });
  };

  return (
    <Layout>
      <PageHeader
        title="Events & Meetings"
        subtitle="Perfect venues for weddings, corporate events, and special occasions"
        backgroundImage="https://images.unsplash.com/photo-1517457373958-b7bdd4587205"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Event Spaces</h2>
            <p className="text-lg text-gray-700">
              Host unforgettable events in our stunning mountain venues. Whether it's a dream wedding, corporate retreat, or special celebration, our experienced team will ensure every detail is perfect.
            </p>
          </div>

          <Tabs defaultValue="weddings" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="weddings" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Weddings
                </TabsTrigger>
                <TabsTrigger value="meetings" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Meetings & Conferences
                </TabsTrigger>
                <TabsTrigger value="celebrations" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Celebrations
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Weddings Tab */}
            <TabsContent value="weddings">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Mountain Weddings</h3>
                  <p className="text-lg mb-6 text-gray-700">
                    Say "I do" with the breathtaking Himalayan mountains as your backdrop. Our wedding venues offer a magical setting for your special day, combining natural beauty with luxurious amenities.
                  </p>
                  <p className="text-lg mb-6 text-gray-700">
                    From intimate ceremonies to grand celebrations, our experienced wedding planners will work with you to create a customized experience that reflects your vision and exceeds your expectations.
                  </p>
                  
                  <h4 className="font-semibold text-primary mb-3">Wedding Packages Include:</h4>
                  <div className="space-y-2 mb-6">
                    <FeatureItem text="Dedicated wedding coordinator" />
                    <FeatureItem text="Choice of indoor and outdoor venues" />
                    <FeatureItem text="Customizable catering menus" />
                    <FeatureItem text="Special room rates for guests" />
                    <FeatureItem text="Bridal suite with spectacular views" />
                    <FeatureItem text="Pre-wedding activities for guests" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                      <span className="font-medium text-gray-700">Capacity:</span>
                      <span className="text-gray-600">Up to 150 guests</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                      <span className="font-medium text-gray-700">Venues:</span>
                      <span className="text-gray-600">Mountain View Terrace, Lakeside Lawn, Grand Ballroom</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <img
                    src="https://images.unsplash.com/photo-1550005809-91ad75fb315f"
                    alt="Mountain wedding venue"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
                      alt="Wedding reception"
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
                      alt="Wedding ceremony"
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Meetings Tab */}
            <TabsContent value="meetings">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-6">
                    <img
                      src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205"
                      alt="Conference room"
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1517502884422-41eaead166d4"
                        alt="Meeting setup"
                        className="rounded-lg shadow-lg w-full h-auto"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1551818255-e6e10975bc17"
                        alt="Business meeting"
                        className="rounded-lg shadow-lg w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Meetings & Conferences</h3>
                  <p className="text-lg mb-6 text-gray-700">
                    Elevate your business gatherings in our well-equipped meeting spaces with inspiring mountain views. Our versatile venues can accommodate everything from intimate boardroom meetings to large conferences.
                  </p>
                  <p className="text-lg mb-6 text-gray-700">
                    Combined with our team-building activities and relaxation options, our property offers the perfect balance for productive and rejuvenating corporate events.
                  </p>
                  
                  <h4 className="font-semibold text-primary mb-3">Business Amenities Include:</h4>
                  <div className="space-y-2 mb-6">
                    <FeatureItem text="State-of-the-art audiovisual equipment" />
                    <FeatureItem text="High-speed Wi-Fi throughout" />
                    <FeatureItem text="Professional event coordination" />
                    <FeatureItem text="Customized catering options" />
                    <FeatureItem text="Team-building activities" />
                    <FeatureItem text="Executive transportation services" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                      <span className="font-medium text-gray-700">Capacity:</span>
                      <span className="text-gray-600">10-100 people depending on venue</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                      <span className="font-medium text-gray-700">Venues:</span>
                      <span className="text-gray-600">Himalaya Boardroom, Summit Conference Hall, Executive Lounge</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Celebrations Tab */}
            <TabsContent value="celebrations">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Special Celebrations</h3>
                  <p className="text-lg mb-6 text-gray-700">
                    From milestone birthdays to anniversary celebrations, family reunions to festive gatherings, our venues provide the perfect setting for your special moments.
                  </p>
                  <p className="text-lg mb-6 text-gray-700">
                    Our event specialists will help you design a personalized celebration that reflects your style and creates lasting memories for you and your guests.
                  </p>
                  
                  <h4 className="font-semibold text-primary mb-3">Celebration Packages Include:</h4>
                  <div className="space-y-2 mb-6">
                    <FeatureItem text="Customized event planning" />
                    <FeatureItem text="Decorations and themed setups" />
                    <FeatureItem text="Tailor-made menus and beverage packages" />
                    <FeatureItem text="Entertainment coordination" />
                    <FeatureItem text="Photography services" />
                    <FeatureItem text="Special accommodation rates" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                      <span className="font-medium text-gray-700">Capacity:</span>
                      <span className="text-gray-600">Up to 120 guests</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                      <span className="font-medium text-gray-700">Venues:</span>
                      <span className="text-gray-600">Celebration Hall, Private Dining Room, Garden Pavilion</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <img
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce"
                    alt="Celebration setup"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1470753323753-3f8091bb0232"
                      alt="Birthday celebration"
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1536392706976-e486e2ba97af"
                      alt="Anniversary dinner"
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Event Spaces Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Event Spaces</h2>
            <p className="text-lg text-gray-700">
              Explore our versatile venues that can be customized for any occasion.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
                alt="Lakeside Lawn"
                className="gallery-img"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold">Lakeside Lawn</h3>
                </div>
              </div>
            </div>
            <div className="relative aspect-square group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a"
                alt="Grand Ballroom"
                className="gallery-img"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold">Grand Ballroom</h3>
                </div>
              </div>
            </div>
            <div className="relative aspect-square group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4"
                alt="Summit Conference Hall"
                className="gallery-img"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold">Summit Conference Hall</h3>
                </div>
              </div>
            </div>
            <div className="relative aspect-square group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
                alt="Private Dining Room"
                className="gallery-img"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold">Private Dining Room</h3>
                </div>
              </div>
            </div>
            <div className="relative aspect-square group overflow-hidden rounded-lg col-span-2">
              <img
                src="https://images.unsplash.com/photo-1550005809-91ad75fb315f"
                alt="Mountain View Terrace"
                className="gallery-img"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold">Mountain View Terrace</h3>
                </div>
              </div>
            </div>
            <div className="relative aspect-square group overflow-hidden rounded-lg col-span-2">
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3"
                alt="Garden Pavilion"
                className="gallery-img"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold">Garden Pavilion</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Inquiry Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary text-center">Event Inquiry</h2>
              <p className="text-lg mb-8 text-gray-700 text-center">
                Fill out the form below to start planning your event with us.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <Input id="name" required placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input id="email" type="email" required placeholder="Your email" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <Input id="phone" required placeholder="Your phone number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="eventType" className="text-sm font-medium text-gray-700">Event Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="corporate">Corporate Meeting</SelectItem>
                        <SelectItem value="conference">Conference</SelectItem>
                        <SelectItem value="birthday">Birthday Celebration</SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="eventDate" className="text-sm font-medium text-gray-700">Proposed Event Date</label>
                    <Input id="eventDate" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="guestCount" className="text-sm font-medium text-gray-700">Estimated Guest Count</label>
                    <Input id="guestCount" type="number" min="1" required placeholder="Number of guests" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Additional Information</label>
                  <Textarea 
                    id="message" 
                    rows={5} 
                    placeholder="Please share any specific requirements or questions you have about your event." 
                  />
                </div>

                <div className="flex justify-center">
                  <Button type="submit" className="min-w-[200px] bg-primary hover:bg-primary/90">
                    Submit Inquiry
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  return (
    <div className="flex items-start">
      <Check size={16} className="text-accent mr-2 mt-1" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
};

export default Events;
