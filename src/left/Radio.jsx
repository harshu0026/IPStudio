import React from 'react'
import radio from '../assets/radio.svg'

const Radio = () => {
    return (
        <div className='flex gap-2 mx-8 my-3'>
            <img src={radio} alt="home" className='w-5' />
            <h5 className='text-md text-white font-semibold'> Radio</h5>
        </div>
    )
}

export default Radio