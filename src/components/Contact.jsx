import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  User,
  Building,
  Calendar,
  Package,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: "pickup",
    pickupDate: "",
    pickupTime: "",
    scrapTypes: [],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // EmailJS Configuration - REPLACE THESE WITH YOUR ACTUAL VALUES
  const EMAILJS_SERVICE_ID = "service_8ow39ha"; // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = "template_xli8zl4"; // Replace with your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = "HN1dqDeT0BuX3JY1C"; // Replace with your EmailJS public key
  const ADMIN_EMAIL = "nandankarps@rknec.edu"; // Admin email to receive notifications

  const scrapCategories = [
    "Paper",
    "Plastic",
    "Metal",
    "E-Waste",
    "Glass",
    "Appliances",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleScrapTypeChange = (scrapType) => {
    setFormData((prev) => {
      const isSelected = prev.scrapTypes.includes(scrapType);
      return {
        ...prev,
        scrapTypes: isSelected
          ? prev.scrapTypes.filter((type) => type !== scrapType)
          : [...prev.scrapTypes, scrapType],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Get current date and time
      const now = new Date();
      const submissionDate = now.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const submissionTime = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      });

      // Format scrap types as HTML badges for email
      const scrapTypesHtml = formData.scrapTypes
        .map((type) => `<span class="scrap-badge">${type}</span>`)
        .join(" ");

      // Prepare email template parameters
      const templateParams = {
        to_email: ADMIN_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service_type:
          formData.serviceType.charAt(0).toUpperCase() +
          formData.serviceType.slice(1),
        subject: formData.subject,
        message: formData.message,
        pickup_date: formData.pickupDate || "N/A",
        pickup_time: formData.pickupTime || "N/A",
        scrap_types:
          formData.scrapTypes.length > 0
            ? formData.scrapTypes.join(", ")
            : "N/A",
        scrap_types_html: scrapTypesHtml || "N/A",
        inquiry_type:
          formData.serviceType === "pickup"
            ? "🚛 Schedule Pickup Request"
            : "📧 General Inquiry",
        if_pickup: formData.serviceType === "pickup" ? "true" : "",
        submission_date: submissionDate,
        submission_time: submissionTime,
      };

      // Send email to admin using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      //send confirmation email to user
      const userTemplateParams = {
        to_email: formData.email,
        from_name: "Vijay Kabadiwala",
        from_email: ADMIN_EMAIL,
        user_name: formData.name,
        service_type:
          formData.serviceType.charAt(0).toUpperCase() +
          formData.serviceType.slice(1),
        pickup_date: formData.pickupDate || "N/A",
        pickup_time: formData.pickupTime || "N/A",
        scrap_types:
          formData.scrapTypes.length > 0
            ? formData.scrapTypes.join(", ")
            : "N/A",
        scrap_types_html: scrapTypesHtml || "N/A",
        inquiry_type:
          formData.serviceType === "pickup"
            ? "🚛 Schedule Pickup Request"
            : "📧 General Inquiry",
      };
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        "template_cojyrot", // You need to create this template in EmailJS
        userTemplateParams,
        EMAILJS_PUBLIC_KEY
      );
      console.log("Email sent successfully:", templateParams);
      setIsSubmitted(true);
      setIsLoading(false);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          serviceType: "general",
          pickupDate: "",
          pickupTime: "",
          scrapTypes: [],
        });
      }, 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again or contact us directly.");
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Your{" "}
            {formData.serviceType === "pickup" ? "pickup request" : "message"}{" "}
            has been received successfully. Our team will get back to you within
            24 hours.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              A confirmation email has been sent to{" "}
              <strong>{formData.email}</strong>
            </p>
          </div>
          {formData.serviceType === "pickup" && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-green-800 font-medium mb-2">
                Pickup Details:
              </p>
              <p className="text-sm text-green-700">
                Date: {formData.pickupDate}
                <br />
                Time: {formData.pickupTime}
                <br />
                Scrap Types: {formData.scrapTypes.join(", ")}
              </p>
            </div>
          )}
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-medium"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-green-600">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Have questions? We're here to help. Reach out to us and we'll
              respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-2 -mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">+91 7397889691</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">vijaygupta2693@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">Nagpur, Maharashtra</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Working Hours
              </h3>
              <p className="text-gray-600 text-sm">Mon - Sat: 8AM - 8PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-3xl border-[0.5] shadow-xl rounded-2xl mx-auto p-6 bg-white">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name, Email, Phone in a row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 pr-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 pr-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 pr-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                      placeholder="Phone"
                    />
                  </div>
                </div>
              </div>

              {/* Service Type & Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Service Type *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 pr-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm appearance-none"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="pickup">Schedule Pickup</option>
                      <option value="rates">Rate Inquiry</option>
                      <option value="partnership">Partnership/Business</option>
                      <option value="complaint">Complaint/Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 pr-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>

              {/* Conditional Pickup Fields */}
              {formData.serviceType === "pickup" && (
                <div className="bg-green-50 p-4 rounded-lg space-y-3 border border-green-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Pickup Details
                  </h3>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Pickup Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="date"
                          name="pickupDate"
                          value={formData.pickupDate}
                          onChange={handleChange}
                          required={formData.serviceType === "pickup"}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full pl-8 pr-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Pickup Time *
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <select
                          name="pickupTime"
                          value={formData.pickupTime}
                          onChange={handleChange}
                          required={formData.serviceType === "pickup"}
                          className="w-full pl-8 pr-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm appearance-none"
                        >
                          <option value="">Select Time</option>
                          <option value="8:00 AM - 10:00 AM">
                            8:00 AM - 10:00 AM
                          </option>
                          <option value="10:00 AM - 12:00 PM">
                            10:00 AM - 12:00 PM
                          </option>
                          <option value="12:00 PM - 2:00 PM">
                            12:00 PM - 2:00 PM
                          </option>
                          <option value="2:00 PM - 4:00 PM">
                            2:00 PM - 4:00 PM
                          </option>
                          <option value="4:00 PM - 6:00 PM">
                            4:00 PM - 6:00 PM
                          </option>
                          <option value="6:00 PM - 8:00 PM">
                            6:00 PM - 8:00 PM
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Scrap Types */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">
                      Select Scrap Types * (Choose at least one)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {scrapCategories.map((category) => (
                        <label
                          key={category}
                          className={`flex items-center p-2 border rounded cursor-pointer transition-colors ${
                            formData.scrapTypes.includes(category)
                              ? "bg-green-100 border-green-500"
                              : "bg-white border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.scrapTypes.includes(category)}
                            onChange={() => handleScrapTypeChange(category)}
                            className="mr-2"
                          />
                          <span className="text-xs font-medium">
                            {category}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={
                  isLoading ||
                  (formData.serviceType === "pickup" &&
                    formData.scrapTypes.length === 0)
                }
                className={`w-full py-2 rounded font-medium text-base flex items-center justify-center transition-colors ${
                  isLoading ||
                  (formData.serviceType === "pickup" &&
                    formData.scrapTypes.length === 0)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {formData.serviceType === "pickup"
                      ? "Schedule Pickup"
                      : "Send Message"}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Call us now for instant support or schedule a pickup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-medium text-lg">
              <a href="tel:+917397889691">Call Now</a>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-600 transition-colors font-medium text-lg">
              Schedule Pickup
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
