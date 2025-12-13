import React from 'react';
import Offerdata from './OfferData';
import { Link } from 'react-router-dom';

function Offers() {
  return (
    <div className="w-full flex flex-col items-center gap-8 my-12 px-4">
      <span className="font-bold text-5xl mb-6 text-center">What We Offer</span>
      {
        Offerdata.map((offer, idx) => (
          <div
            className="w-full max-w-4xl flex flex-col md:flex-row gap-6 items-center justify-between bg-white shadow-2xl rounded-2xl p-6 transform transition-transform hover:scale-105"
            key={idx}
          >
            <div className="flex justify-center items-center flex-col gap-6 p-4 font-bold text-3xl flex-1 text-center">
              <img className='w-32' src={offer.src}alt="" />
              <span>{offer.title}</span>
            </div>
            <div className="w-full md:w-2/5 flex justify-center items-center h-40 p-4 text-center border-t md:border-t-0 md:border-l border-gray-300">{offer.content}</div>
          </div>
        ))
      }
      <Link className="px-6 py-3 mt-8 bg-black text-white rounded-2xl transform transition-transform hover:scale-105" to="/book">
        Book Now
      </Link>
    </div>
  );
}

export default Offers;
