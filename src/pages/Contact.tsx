
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });
  };

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries and reservations"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Send Us a Message</h2>
              <p className="mb-8 text-gray-700">
                Have a question or special request? Fill out the form below and our team will get back to you as soon as possible.
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
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="booking">Booking Inquiry</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="events">Events & Meetings</SelectItem>
                        <SelectItem value="dining">Dining</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea id="message" rows={6} required placeholder="Your message or inquiry" />
                </div>

                <div className="flex justify-center md:justify-start">
                  <Button type="submit" className="min-w-[150px] bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Contact Information</h2>
              <p className="mb-8 text-gray-700">
                We're here to help make your stay perfect. Contact us through any of the following methods:
              </p>
              
              <div className="space-y-6 mb-10">
                <ContactItem 
                  icon={<MapPin />} 
                  title="Address" 
                  content="Mall Road, Nainital, Uttarakhand, 263002, India" 
                />
                <ContactItem 
                  icon={<Phone />} 
                  title="Phone" 
                  content="+91 8765432109" 
                />
                <ContactItem 
                  icon={<Mail />} 
                  title="Email" 
                  content="info@himalayanretreat.com" 
                />
                <ContactItem 
                  icon={<Clock />} 
                  title="Reception Hours" 
                  content="24/7, 365 days" 
                />
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-primary">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-3 rounded-full hover:bg-primary/80 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-3 rounded-full hover:bg-primary/80 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-3 rounded-full hover:bg-primary/80 transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>

              {/* Google Map */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">Our Location</h3>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27607.414811662296!2d79.4392972!3d29.3825241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a1bc28fd9d61%3A0x7cae7ba916987db3!2sNainital%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1649072436853!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hotel Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">Frequently Asked Questions</h2>
            <p className="mb-12 text-gray-700 text-center">
              Find quick answers to common questions about our hotel and services.
            </p>
            
            <div className="space-y-6">
              <FAQItem
                question="What are the check-in and check-out times?"
                answer="Our standard check-in time is 2:00 PM, and check-out is at 12:00 PM. Early check-in and late check-out can be arranged based on availability (additional charges may apply)."
              />
              <FAQItem
                question="Is there transportation available from the airport to the hotel?"
                answer="Yes, we offer airport transfers for our guests. Please provide your flight details at least 24 hours in advance when making your booking or contact our concierge for arrangements."
              />
              <FAQItem
                question="Are pets allowed at the hotel?"
                answer="We have a no-pets policy except for service animals. Please contact us in advance if you will be traveling with a service animal."
              />
              <FAQItem
                question="What attractions are near the hotel?"
                answer="Our hotel is located near several attractions including Naini Lake, Mall Road, Naina Devi Temple, Snow View Point, and the Himalayan Botanical Gardens. Our concierge can help arrange tours and transportation."
              />
              <FAQItem
                question="Do you have facilities for guests with disabilities?"
                answer="Yes, we have accessible rooms and facilities for guests with disabilities. Please specify your requirements when making your reservation."
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
              Ready to Experience Our Hospitality?
            </h2>
            <p className="text-lg mb-8">
              Book your stay at Himalayan Lakeside Retreat for an unforgettable mountain getaway.
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

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content }) => {
  return (
    <div className="flex items-start">
      <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-4 text-left font-semibold bg-white hover:bg-gray-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-primary">{question}</span>
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white border-t border-gray-200">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
