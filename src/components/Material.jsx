import { SignedIn } from '@clerk/clerk-react'
import React from 'react'

export const Material = () => {
    return (
        <SignedIn>
            <div className='h-screen w-full flex justify-center items-center'>
                <h1>There is no material Now</h1>
            </div>
        </SignedIn>
    )
}
