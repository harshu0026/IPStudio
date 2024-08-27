import React from 'react'
import allplaylist from '../assets/allplaylist.svg'
import fav from '../assets/fav.svg'

const Playlist = () => {
    return (
        <div className='mx-7 my-5'>
            <h1 className='text-gray-400 text-xs font-bold'>Playlist</h1>
            <div className="library">
                <div className='flex gap-2 mx-1 my-3'>
                    <img src={allplaylist} alt="home" className='w-5' />
                    <h5 className='text-s text-white font-semibold'>All Playlists</h5>
                </div>
                <div className='flex gap-2 mx-1 my-3'>
                    <img src={fav} alt="home" className='w-5' />
                    <h5 className='text-s text-white font-semibold'>Favourite Songs</h5>
                </div>
            </div>
        </div>
    )
}

export default Playlist