import React from 'react'
import play from '../assets/play.svg'
import forward from '../assets/forward.svg'
import backward from '../assets/backward.svg'
import shuffle from '../assets/shuffle.svg'
import Repeat from '../assets/Repeat.svg'


const Playingsec = () => {
    return (
        <div className='w-[28%] playbar flex gap-4 px-28 py-2'>
            <img src={shuffle} alt="home" className='w-5' />
            <img src={backward} alt="home" className='w-4' />
            <img src={play} alt="home" className='w-4' />
            <img src={forward} alt="home" className='w-4' />
            <img src={Repeat} alt="home" className='w-5' />
        </div>
    )
}

export default Playingsec