
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Himalayan Retreat</h3>
            <p className="mb-6 text-gray-300">
              Experience luxury in the heart of the Himalayas, with breathtaking views of lakes and mountains, world-class amenities, and warm hospitality.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} href="https://facebook.com" ariaLabel="Facebook" />
              <SocialIcon icon={<Instagram size={20} />} href="https://instagram.com" ariaLabel="Instagram" />
              <SocialIcon icon={<Twitter size={20} />} href="https://twitter.com" ariaLabel="Twitter" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/rooms" label="Accommodations" />
              <FooterLink to="/dining" label="Dining" />
              <FooterLink to="/facilities" label="Facilities" />
              <FooterLink to="/gallery" label="Explore Uttarakhand" />
              <FooterLink to="/offers" label="Special Offers" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>Mall Road, Nainital, Uttarakhand, 263002, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <span>+91 8765432109</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <span>info@himalayanretreat.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md focus:outline-none text-primary"
              />
              <button
                type="submit"
                className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Himalayan Lakeside Retreat. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type SocialIconProps = {
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
};

const SocialIcon = ({ icon, href, ariaLabel }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
  >
    {icon}
  </a>
);

type FooterLinkProps = {
  to: string;
  label: string;
};

const FooterLink = ({ to, label }: FooterLinkProps) => (
  <li>
    <Link to={to} className="hover:text-white transition-colors">
      {label}
    </Link>
  </li>
);

export default Footer;
