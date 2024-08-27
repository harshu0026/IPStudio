import React from 'react'
import Logo from "/logo.svg"
import music from '../assets/music.svg'



const Music = () => {
    return (
        <div className="visualSec flex w-[27vw] justify-center items-center">
            <div className="box1 min-w-11 bg-ip-mgrey flex justify-center">
                <img src={music} alt="home" className='w-7 py-2' />
            </div>
            <div className="box2 min-w-full bg-ip-lgrey flex justify-center">
                <img src={Logo} alt="home" className='w-7 py-2' />
            </div>
        </div>
    )
}

export default Music