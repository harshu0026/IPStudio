import React from 'react'
import TopPicks from '../TopPicks'

const Home = () => {
    return (
        <div className='max-w-[85vw]'>
            <div className='max-w-full'>
                <h1 className='text-white text-3xl mx-7 pt-8 pb-2'>Home</h1>
                <div className="underline h-0.5 bg-ip-black mt-4 mx-7"></div>
            </div>
            <div className="cards">
                <TopPicks />
            </div>
        </div>
    )
}

export default Home