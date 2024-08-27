import React from 'react'
import recentlyadded from '../assets/clock.svg'
import artists from '../assets/artist.svg'
import albums from '../assets/albums.svg'
import songs from '../assets/note.svg'
import madeforyou from '../assets/profile.svg'

const Library = () => {
    return (
        <div className='mx-7 my-5'>
            <h1 className='text-gray-400 text-xs font-bold'>Library</h1>
            <div className="library">
                <div className='flex gap-2 mx-1 my-3'>
                    <img src={recentlyadded} alt="home" className='w-5' />
                    <h5 className='text-s text-white font-semibold'>Recently Added</h5>
                </div>
                <div className='flex gap-2 mx-1 my-3'>
                    <img src={artists} alt="home" className='w-5' />
                    <h5 className='text-s text-white font-semibold'>Artists</h5>
                </div>
                <div className='flex gap-2 mx-1 my-3'>
                    <img src={albums} alt="home" className='w-5' />
                    <h5 className='text-s text-white font-semibold'>Albums</h5>
                </div>
                <div className='flex gap-2 mx-1 my-3'>
                    <img src={songs} alt="home" className='w-5' />
                    <h5 className='text-s text-white font-semibold'>Songs</h5>
                </div>
                <div className='flex gap-2 mx-1 my-3'>
                    <img src={madeforyou} alt="home" className='w-5' />
                    <h5 className='text-s text-white font-semibold'>Made for You</h5>
                </div>
            </div>
        </div>
    )
}

export default Library