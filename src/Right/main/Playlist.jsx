import React from 'react'
import FavPlalist from '../FavPlalist'

const Playlist = () => {
    return (
        <div className='px-7 pt-8 max-w-[85vw]'>
            <h1 className='text-lg text-ip-font pb-3'>Favourite Playlist</h1>
            <div className="cards">
                <FavPlalist />
            </div>
        </div>
    )
}

export default Playlist