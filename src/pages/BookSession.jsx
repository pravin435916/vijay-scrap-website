import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { SignInButton, SignedIn, SignedOut, useUser } from '@clerk/clerk-react';

function BookSession() {
  const { user } = useUser();
  const [showPopup, setShowPopup] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const sendBookEmail = async (e) => {
    e.preventDefault();
    if (mobileNumber.length !== 10) {
      toast.error('Mobile Number is Invalid (10 digits)');
      return;
    }

    // Start submitting, disable button
    setIsSubmitting(true);

    const form = {
      name: user?.fullName,
      email: user?.emailAddresses[0]?.emailAddress, // Replace with dynamic data if needed
      mobile: mobileNumber,
      message: 'I would like to book a session for the Digital Literacy Workshop.'
    };
    const form2 = {
      name: user?.fullName,
      email: user?.emailAddresses[0]?.emailAddress, // Replace with dynamic data if needed
      // mobile: mobileNumber,
      // message: 'I would like to book a session for the Digital Literacy Workshop.'
    };

    try {
      // Send booking email
      await emailjs.send(
        'service_bv48nt9', // Replace with your service ID
        'template_pho98o9', // Replace with your admin notification template ID
        form,
        'hwmmzpJM91oKSEDxq' // Your public key from EmailJS
      );
      toast.success('Wait for admin call');
      closePopup(); // Close the popup on success

      // Send thank you email
      await emailjs.send(
        'service_njsxbyh', // Replace with your service ID
        'template_xuhfz3b', // Replace with your thank you email template ID
        form2,
        'HN1dqDeT0BuX3JY1C' // Your public key from EmailJS
      );
      toast.success('Thank You Email SUCCESS!');
    } catch (error) {
      console.log('Email sending failed...', error);
      toast.error('Email sending failed');
    } finally {
      // Reset form state after submission completes
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col  min-h-[100vh] overflow-hidden ">
      <section className="bg-[#ffe4f1] box pb-8 w-full flex justify-center items-center gap-10 pt-12 md:pt-24 lg:pt-32">
        <div className="p-4 md:px-6 space-y-10 xl:space-y-16 ">
          <div className="w-full flex justify-center items-center gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div className='flex flex-col gap-4'>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Digital Literacy Workshop
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Join our 2-day intensive workshop to enhance your digital literacy skills and stay ahead in the digital age.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-white">
                  ₹100
                </div>
                <p className="text-gray-500">per participant</p>
              </div>
            </div>
            <img className='w-40' src="/assets/council.png" alt="" />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What You'll Learn</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                This workshop covers the following topics:
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1 border rounded-3xl p-4">
              <h3 className="text-lg font-bold">Basic Computer Skills</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Learn the essential skills needed to operate a computer efficiently.
              </p>
            </div>
            <div className="grid gap-1 border rounded-3xl p-4">
              <h3 className="text-lg font-bold">Internet Navigation</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Discover how to effectively browse the internet and utilize online resources.
              </p>
            </div>
            <div className="grid gap-1 border rounded-3xl p-4">
              <h3 className="text-lg font-bold">Email Communication</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Learn how to set up, manage, and use email for personal and professional communication.
              </p>
            </div>
            <div className="grid gap-1 border rounded-3xl p-4">
              <h3 className="text-lg font-bold">Online Safety</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Understand the basics of online safety and how to protect your information.
              </p>
            </div>
            <div className="grid gap-1 border rounded-3xl p-4">
              <h3 className="text-lg font-bold">Social Media Usage</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Learn how to use social media platforms responsibly and effectively.
              </p>
            </div>
            <div className="grid gap-1 border rounded-3xl p-4">
              <h3 className="text-lg font-bold">Digital Tools</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Explore various digital tools and apps to improve productivity and organization.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <SignedOut>
              <span>First Sign in then You can Book   <SignInButton className='px-4 py-2 bg-black text-white rounded-2xl' /></span>
            </SignedOut>
            <SignedIn>
              <button
                onClick={openPopup}
                className="inline-flex h-10 items-center justify-center rounded-md bg-black text-white px-8 text-sm font-medium shadow transition-colors"
              >
                Book Session Now
              </button>
            </SignedIn>
          </div>
          {/* Popup form */}
          {showPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                <h2 className="text-xl font-bold mb-4">Enter Mobile Number</h2>
                <form onSubmit={sendBookEmail}>
                  <input
                    type="text"
                    value={mobileNumber}
                    onChange={handleMobileNumberChange}
                    placeholder="Enter your mobile number"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                    required
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting} // Disable button while submitting
                      className={`inline-flex h-10 items-center justify-center rounded-md bg-black text-white px-8 text-sm font-medium shadow transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    <button
                      type="button"
                      onClick={closePopup}
                      className="ml-2 inline-flex h-10 items-center justify-center rounded-md bg-gray-300 text-gray-800 px-6 text-sm font-medium shadow transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default BookSession;
