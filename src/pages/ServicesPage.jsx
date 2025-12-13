import React from "react";
import {
  Recycle,
  Truck,
  CreditCard,
  Shield,
  Calendar,
  Scale,
  Newspaper,
  Cpu,
  Trash2,
  Box,
  Lightbulb,
  CheckCircle,
  Clock,
  TrendingUp,
  Users,
  Award,
  MapPin,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";

  export const process = [
    {
      step: "1",
      title: "Book Online",
      description:
        "Schedule a pickup through our website, app, or call us directly. Choose your preferred date and time.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "We Arrive",
      description:
        "Our professional team arrives at your doorstep with digital weighing equipment.",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Weigh & Verify",
      description:
        "Items are weighed in front of you with certified digital scales. Price is calculated transparently.",
      icon: <Scale className="w-6 h-6" />,
    },
    {
      step: "4",
      title: "Get Paid",
      description:
        "Receive instant payment through your preferred method - cash, UPI, or digital wallet.",
      icon: <CreditCard className="w-6 h-6" />,
    },
  ];

const ServicesPage = () => {
  const mainServices = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Doorstep Pickup",
      description:
        "We come to your doorstep at your convenience. No need to step out or search for scrap dealers.",
      features: [
        "Schedule online",
        "Choose time slot",
        "Track pickup status",
        "Zero pickup charges",
      ],
      color: "green",
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Digital Weighing Scale",
      description:
        "100% transparent weighing with certified digital scales. No disputes, complete trust.",
      features: [
        "Certified equipment",
        "Real-time display",
        "Weight verification",
        "Accurate measurement",
      ],
      color: "blue",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Instant Payment",
      description:
        "Get paid immediately after collection. Multiple payment options available for your convenience.",
      features: [
        "Cash on spot",
        "UPI transfer",
        "Digital wallets",
        "Bank transfer",
      ],
      color: "purple",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Best Market Rates",
      description:
        "Competitive pricing based on current market rates. Get the best value for your recyclables.",
      features: [
        "Daily rate updates",
        "Price transparency",
        "No hidden charges",
        "Fair valuation",
      ],
      color: "orange",
    },
  ];

  const scrapCategories = [
    {
      icon: <Newspaper className="w-12 h-12" />,
      title: "Paper & Cardboard",
      items: [
        "Newspapers",
        "Magazines",
        "Books",
        "Cardboard boxes",
        "Office paper",
        "Notebooks",
      ],
      rate: "₹12-16/kg",
      color: "bg-amber-100",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200",
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Plastic Materials",
      items: [
        "PET bottles",
        "Plastic containers",
        "Hard plastic",
        "Plastic bags",
        "Toys",
        "Buckets",
      ],
      rate: "₹8-20/kg",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      icon: <Box className="w-12 h-12" />,
      title: "Metal Scrap",
      items: [
        "Iron/Steel",
        "Aluminum",
        "Copper",
        "Brass",
        "Stainless steel",
        "Metal utensils",
      ],
      rate: "₹25-450/kg",
      color: "bg-gray-100",
      iconColor: "text-gray-600",
      borderColor: "border-gray-200",
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "E-Waste",
      items: [
        "Mobile phones",
        "Laptops",
        "Computers",
        "Cables",
        "Chargers",
        "Keyboards",
      ],
      rate: "₹50-300/piece",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Appliances",
      items: [
        "Refrigerators",
        "Washing machines",
        "Air conditioners",
        "Microwaves",
        "TVs",
        "Fans",
      ],
      rate: "₹400-2000/piece",
      color: "bg-red-100",
      iconColor: "text-red-600",
      borderColor: "border-red-200",
    },
    {
      icon: <Trash2 className="w-12 h-12" />,
      title: "Others",
      items: [
        "Glass bottles",
        "Rubber",
        "Vehicle batteries",
        "Mixed scrap",
        "Furniture",
        "Wood",
      ],
      rate: "₹3-80/kg",
      color: "bg-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Verified Team",
      description:
        "All our staff are background-verified and trained professionals",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Flexible Timing",
      description: "Choose from multiple time slots that suit your schedule",
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Quality Service",
      description: "Rated 4.8/5 by over 50,000 satisfied customers",
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-600" />,
      title: "Wide Coverage",
      description: "Available in 50+ cities across India",
    },
    {
      icon: <Recycle className="w-8 h-8 text-green-600" />,
      title: "Eco-Friendly",
      description:
        "100% responsible recycling contributing to a greener planet",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Customer Support",
      description: "Dedicated support team available 6 days a week",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Comprehensive scrap collection and recycling services designed for
              your convenience and peace of mind.
            </p>
            <Link to='/contact'>
              <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors font-medium text-lg">
                Schedule Pickup Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600">
              Professional scrap collection services at your fingertips
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-green-600"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-green-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrap Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Accept
            </h2>
            <p className="text-lg text-gray-600">
              We collect all types of recyclable materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scrapCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border ${category.borderColor}`}
              >
                <div
                  className={`${category.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${category.iconColor}`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                  {category.title}
                </h3>
                <div className="bg-green-50 text-green-700 text-center py-2 px-4 rounded-full mb-4 font-semibold">
                  {category.rate}
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-blue-900 font-medium mb-2">
              📊 Don't see what you're looking for?
            </p>
            <p className="text-blue-800 text-sm mb-4">
              We accept many other recyclable items. Contact us to check if we
              collect your specific material.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple 4-step process to sell your scrap
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-green-200 -z-10" />
                )}

                <div className="text-center">
                  <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl relative z-10">
                    {item.step}
                  </div>
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Experience the difference with our premium scrap collection
              service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              💰 About Our Pricing
            </h3>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  Prices are updated daily based on current market rates
                </span>
              </p>
              <p className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  Rates may vary slightly based on quality and quantity of
                  materials
                </span>
              </p>
              <p className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  No hidden charges - the price you see is what you get
                </span>
              </p>
              <p className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  Bulk quantities may receive better rates - contact us for
                  details
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Schedule your first pickup today and experience the easiest way to
            sell scrap
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-medium text-lg">
              Book Pickup Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-600 transition-colors font-medium text-lg">
              Check Rates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
