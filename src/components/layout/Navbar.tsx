
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-95 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-50">
            <div className="flex items-center">
              <h1 className={`text-2xl md:text-3xl font-bold ${isScrolled || isOpen ? "text-primary" : "text-white"}`}>
                Himalayan Retreat
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink to="/" label="Home" isScrolled={isScrolled} />
            <NavLink to="/about" label="About" isScrolled={isScrolled} />
            <NavDropdown 
              label="Accommodations" 
              isScrolled={isScrolled}
              items={[
                { label: "Rooms & Suites", to: "/rooms" },
                { label: "Dining", to: "/dining" },
                { label: "Facilities", to: "/facilities" }
              ]}
            />
            <NavLink to="/gallery" label="Explore Uttarakhand" isScrolled={isScrolled} />
            <NavDropdown 
              label="Experiences" 
              isScrolled={isScrolled}
              items={[
                { label: "Special Offers", to: "/offers" },
                { label: "Events & Meetings", to: "/events" }
              ]}
            />
            <NavLink to="/contact" label="Contact" isScrolled={isScrolled} />
            <Link to="/booking">
              <Button 
                variant={isScrolled ? "default" : "secondary"} 
                className="ml-4"
              >
                Book Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="lg:hidden z-50 p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={isScrolled ? "text-primary" : "text-white"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-primary" : "text-white"} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-24">
          <div className="container-custom flex-1 overflow-y-auto">
            <div className="flex flex-col space-y-6 py-8">
              <MobileNavLink to="/" label="Home" onClick={() => setIsOpen(false)} />
              <MobileNavLink to="/about" label="About" onClick={() => setIsOpen(false)} />
              <MobileNavLink to="/rooms" label="Rooms & Suites" onClick={() => setIsOpen(false)} />
              <MobileNavLink to="/dining" label="Dining" onClick={() => setIsOpen(false)} />
              <MobileNavLink to="/facilities" label="Facilities" onClick={() => setIsOpen(false)} />
              <MobileNavLink to="/gallery" label="Explore Uttarakhand" onClick={() => setIsOpen(false)} />
              <MobileNavLink to="/offers" label="Special Offers" onClick={() => setIsOpen(false)} />
              <MobileNavLink to="/events" label="Events & Meetings" onClick={() => setIsOpen(false)} />
              <MobileNavLink to="/contact" label="Contact" onClick={() => setIsOpen(false)} />
              <Link 
                to="/booking" 
                className="bg-primary text-white py-3 px-4 rounded-md text-center font-medium"
                onClick={() => setIsOpen(false)}
              >
                Book Your Stay
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

type NavLinkProps = {
  to: string;
  label: string;
  isScrolled: boolean;
};

const NavLink = ({ to, label, isScrolled }: NavLinkProps) => (
  <Link
    to={to}
    className={`px-3 py-2 text-sm font-medium ${
      isScrolled ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
    } transition-colors`}
  >
    {label}
  </Link>
);

type NavDropdownProps = {
  label: string;
  items: { label: string; to: string }[];
  isScrolled: boolean;
};

const NavDropdown = ({ label, items, isScrolled }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button 
        className={`flex items-center px-3 py-2 text-sm font-medium ${
          isScrolled ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
        } transition-colors`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <ChevronDown size={16} className="ml-1" />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-4 py-2 text-sm text-primary hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

type MobileNavLinkProps = {
  to: string;
  label: string;
  onClick: () => void;
};

const MobileNavLink = ({ to, label, onClick }: MobileNavLinkProps) => (
  <Link
    to={to}
    className="text-primary font-medium text-lg py-2"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
