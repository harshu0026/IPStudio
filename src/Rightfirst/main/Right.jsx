import React from 'react'
import Home from '../Home'
import Playingsec from '../../Right/Playingsec'
import Music from '../../Right/Music'
import Volume from '../../Right/Volume'
import Sign from '../../Right/Sign'

const Right = () => {
    return (
        <div className="container w-[80vw] ml-0">
            <div className='musicBar bg-ip-dgrey min-w-full flex fixed top-0 z-10'>
                <Playingsec />
                <Music />
                <Volume />
                <Sign />
            </div>
            <div className="heroSec absolute top-16 z-0">
                <Home />
            </div>
        </div>
    )
}

export default Right