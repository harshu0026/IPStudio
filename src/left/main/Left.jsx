import React from 'react'
import Logo from '../Logo'
import Search from '../Search'
import Home from '../Home'
import Browse from '../Browse'
import Radio from '../Radio'
import Library from '../Library'
import Playlist from '../Playlist'
import '../mobile.css'


const Left = () => {
    return (
        <div className='min-h-screen sidebar'>
            <div className="min-h-full w-60 element bg-ip-grey fixed">
                <Logo />
                <Search />
                <Home />
                <Browse />
                <Radio />
                <Library />
                <Playlist />
            </div>
        </div>
    )
}

export default Left