import React from 'react'
import browse from '../assets/browse.svg'

const Browse = () => {
    return (
        <div className='flex gap-2 mx-8 my-3'>
            <img src={browse} alt="home" className='w-5' />
            <h5 className='text-md text-white font-semibold'> Browse</h5>
        </div>
    )
}

export default Browse