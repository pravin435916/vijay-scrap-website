import React from 'react'
import logo1 from '/logos/logo1.webp'
import logo2 from '/logos/logo2.webp'
import logo3 from '/logos/logo3.webp'
import logo4 from '/logos/logo4.webp'
import logo5 from '/logos/logo5.webp'

function Partners() {
    const logos = [
        logo1, logo2, logo3, logo4, logo5
    ];

    return (
        <>
            <div className='w-full my-10 '>
                <h1 className='text-center text-5xl font-bold'>Our Partners</h1>
                <div className='w-full flex justify-center items-center gap-10 my-8 flex-wrap'>
                    {
                        logos.map((item, index) => (
                            <img key={index} className='sm:w-40 w-24 border-b-2' src={item} alt={`logo-${index}`} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Partners;
