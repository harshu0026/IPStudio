import React from 'react'
import Playingsec from '../Playingsec'
import Music from '../Music'
import Volume from '../Volume'
import Sign from '../Sign'
import Home from './Home'
import Recent from './Recent'
import Playlist from './Playlist'
import '../mobile.css'

const Right = () => {
    return (
        <div className="container w-[85vw] ml-4 relative right-0 left-0">
            <div className='musicBar bg-ip-dgrey min-w-full flex fixed left-60 top-0 z-10 musicbar1'>
                <Playingsec />
                <Music />
                <Volume />
                {/* <Sign /> */}
            </div>
            <div className="heroSec absolute min-w-full flex flex-col items-center left-52 top-16 z-0 homebar">
                <Home />
                <Recent />
                <Playlist />
            </div>
        </div>
    )
}

export default Right