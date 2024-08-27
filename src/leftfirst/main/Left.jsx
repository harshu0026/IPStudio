import React from 'react'
import Logo from '../../left/Logo'
import Search from '../../left/Search'
import Home from '../../left/Home'
import Browse from '../../left/Browse'
import Radio from '../../left/Radio'


const Left = () => {
    return (
        <div className='w-64 h-screen'>
            <div className=" h-full element bg-ip-grey fixed">
                <Logo />
                <Search />
                <Home />
                <Browse />
                <Radio />
            </div>
        </div>
    )
}

export default Left