import React from "react";
import {
  Recycle,
  Target,
  Eye,
  Award,
  Users,
  Leaf,
  TrendingUp,
  Shield,
  Heart,
  Globe,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">Vijay Kabadi Wala</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Revolutionizing waste management in India, one pickup at a time.
              We're on a mission to make recycling convenient, rewarding, and
              accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, Vijay KabadiWala emerged from a simple
                observation: traditional scrap collection was inconvenient,
                unreliable, and often undervalued people's recyclables. We set
                out to change that.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small operation in Mumbai has now grown into
                India's most trusted online scrap collection service, serving
                over 50 cities and helping thousands of households and
                businesses recycle responsibly.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be at the forefront of India's circular
                economy, combining technology with traditional recycling wisdom
                to create a sustainable future for all.
              </p>
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

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To make recycling effortless and rewarding for every Indian
                household and business, while ensuring fair prices and creating
                livelihood opportunities in the recycling ecosystem. We strive
                to divert millions of tons of waste from landfills and
                contribute to a cleaner, greener India.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To become India's largest and most trusted waste management
                platform, setting the gold standard for transparency,
                convenience, and environmental responsibility. We envision a
                future where every piece of recyclable material finds its way
                back into the circular economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                Digital weighing scales, clear pricing, and honest dealings in
                every transaction.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Committed to environmental protection and promoting the circular
                economy.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Customer First
              </h3>
              <p className="text-gray-600">
                Your convenience and satisfaction are at the heart of our
                service.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fair Pricing
              </h3>
              <p className="text-gray-600">
                Competitive market rates that respect the value of your
                recyclables.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                Building a network of environmentally conscious citizens across
                India.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                Leveraging technology to make recycling smarter and more
                efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-green-100">
              Making a real difference for our planet
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-green-100">Tons Recycled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                1,000+
              </div>
              <div className="text-green-100">Pickups Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">2+</div>
              <div className="text-green-100">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why We're Different
            </h2>
            <p className="text-lg text-gray-600">
              What sets us apart from traditional scrap dealers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Digital Weighing
                </h3>
              </div>
              <p className="text-gray-600">
                No more disputes over weight. Our certified digital scales
                ensure complete transparency.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Fixed Appointments
                </h3>
              </div>
              <p className="text-gray-600">
                Schedule pickups at your convenience. We respect your time with
                punctual service.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Professional Team
                </h3>
              </div>
              <p className="text-gray-600">
                Trained, verified staff who handle your recyclables with care
                and professionalism.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Online Platform
                </h3>
              </div>
              <p className="text-gray-600">
                Book pickups, track rates, and manage transactions all from your
                smartphone.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Instant Payment
                </h3>
              </div>
              <p className="text-gray-600">
                Choose your payment method - cash, UPI, or digital wallets. Get
                paid immediately.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Environmental Tracking
                </h3>
              </div>
              <p className="text-gray-600">
                See the environmental impact of your recycling efforts with
                detailed reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The people behind Apna Kabadi Wala</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {['CEO', 'Operations Head', 'Technology Lead', 'Customer Success'].map((role, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 w-40 h-40 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Photo</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Name Here</h3>
                <p className="text-gray-600 text-sm">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certifications & Awards */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Recognition</h2>
            <p className="text-lg text-gray-600">Trusted and certified by leading organizations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Certification {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Be part of India's recycling revolution. Together, we can create a
            sustainable future.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-medium text-lg">
            Schedule Your First Pickup
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
