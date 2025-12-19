import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
  Recycle,
} from "lucide-react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    // Remove curly braces around JSX
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Recycle className="w-6 h-6 text-green-500" />
              <span className="ml-2 text-xl font-bold text-white">
                Apna Kabadi Wala
              </span>
            </div>
            <p className="text-sm mb-4">
              India's most trusted online scrap collection service. Contributing
              to a cleaner, greener planet.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-green-500" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-green-500" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-green-500" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-green-500" />
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-green-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-green-500">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/scrap-rates" className="hover:text-green-500">
                  Scrap Rates
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-500">
                  Paper Scrap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Plastic Scrap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Metal Scrap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  E-Waste
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Appliances
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                <span>+91 7397889691</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                <span>vijaykabadiwala@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                <span>Nagpur, Maharashtra, India</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                <span>Mon - Sat: 8AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Vijay Kabadi Wala. All rights
            reserved. | Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
