import React, { useState } from "react";
import { Recycle, X, Menu } from "lucide-react"; // Make sure you have react-feather installed or replace with your icons
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logos/logo-t.png" alt="Vijay Kabadi Wala Logo" className="w-auto h-12" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Services
            </Link>
            <Link
              to="/scrap-rates"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Scrap Rates
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-medium">
              Schedule Pickup
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col justify-center items-center space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Services
              </Link>
              <Link
                to="/scrap-rates"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Scrap Rates
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Contact
              </Link>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-medium w-full">
                Schedule Pickup
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
