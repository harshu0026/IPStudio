import React from 'react'
import home from '../assets/home.svg'

const Home = () => {
    return (
        <div className='flex gap-2 mx-8 my-3'>
            <img src={home} alt="home" className='w-6' />
            <h5 className='text-md text-white font-semibold'>Home</h5>
        </div>
    )
}

export default Home