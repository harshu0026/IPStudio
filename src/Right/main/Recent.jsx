import React from 'react'
import RecentCards from '../RecentCards'

const Recent = () => {
    return (
        <div className='px-7 pt-8 max-w-[85vw]'>
            <h1 className='text-lg text-ip-font pb-3'>Recently Played</h1>
            <div className="cards">
                <RecentCards />
            </div>
        </div>
    )
}

export default Recent