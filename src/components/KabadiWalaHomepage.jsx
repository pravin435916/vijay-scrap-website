import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Recycle,
  TrendingUp,
  Users,
  Shield,
  ChevronRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const KabadiWalaHomepage = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br overflow-hidden h-[90vh] from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center flex-col-reverse sm:flex-row sm:gap-12 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sell Your Scrap at Best Prices with
                <span className="text-green-600"> Free Doorstep Pickup</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                India's most trusted online scrap collection service. Get
                instant payment and contribute to a greener planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors font-medium text-lg flex items-center justify-center">
                  Schedule Pickup
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <Link to="/scrap-rates">
                  <button className="border-2 cursor-pointer border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-50 transition-colors font-medium text-lg">
                    Check Scrap Rates
                  </button>
                </Link>
              </div>
              {/* add one line and inline button type something for industrial pickup schedule also available call now  */}
              <div className="mt-6 text-sm text-gray-500">
                <span className="text-xl">Looking for Industrial Pickup? </span>
                <a
                  href="tel:+919876543210"
                  className="text-green-600 text-xl font-medium ml-1 hover:underline"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="sm:h-96 h-54 flex items-center justify-center">
              <img
                src="/logos/logo-t.png"
                className="object-cover sm:w-232 w-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600">
              Making scrap collection easy and rewarding
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Free Pickup
              </h3>
              <p className="text-gray-600">Doorstep collection at zero cost</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Best Prices
              </h3>
              <p className="text-gray-600">
                Competitive market rates guaranteed
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Instant Payment
              </h3>
              <p className="text-gray-600">
                Cash, UPI, or digital wallet instantly
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Trusted Service
              </h3>
              <p className="text-gray-600">50,000+ happy customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple 3-step process to sell your scrap
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Schedule Pickup
              </h3>
              <p className="text-gray-600">
                Book online or call us. Choose date and time slot convenient for
                you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                We Collect
              </h3>
              <p className="text-gray-600">
                Our team arrives at your doorstep with digital weighing scale.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Get Paid
              </h3>
              <p className="text-gray-600">
                Receive instant payment via your preferred payment method.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scrap Categories Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Accept
            </h2>
            <p className="text-lg text-gray-600">
              We collect all types of recyclable materials
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Paper", img: "/scrap/books.jpg" },
              { name: "Plastic", img: "/scrap/plastic.jpg" },
              { name: "Metal", img: "/scrap/pipa.jpg" },
              { name: "E-Waste", img: "/scrap/ewaste.jpg" },
              { name: "Glass", img: "/scrap/glass.jpg" },
              { name: "Appliances", img: "/scrap/appliances.jpg" },
            ].map((category) => (
              <div
                key={category.name}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="bg-gray-200 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="object-contain w-16 h-16"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/categories/placeholder.png";
                    }}
                  />
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by thousands across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 w-12 h-12 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Customer Name
                    </h4>
                    <p className="text-sm text-gray-600">Location</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Excellent service! The team was professional, punctual, and
                  offered great rates. Highly recommend for anyone looking to
                  sell scrap."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1K+</div>
              <div className="text-green-500">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-green-500">Pickups Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-500">Tons Recycled</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2+</div>
              <div className="text-green-500">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Sell Your Scrap?
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Join thousands of satisfied customers and get the best value for
            your recyclables
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-medium text-lg">
            Schedule Your Pickup Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default KabadiWalaHomepage;
