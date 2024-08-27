import React from 'react'
import Lgo from "/logo.svg"

const Logo = () => {
    return (
        <div className='w-9 px-5 py-3'>
            <a href="/" className='flex items-center w-7 mx-3'>
                <img src={Lgo} className="logo" alt="Ip Logo" />
                <h5 className='text-2xl font-semibold text-white'>IPStudio</h5>
            </a>
        </div>
    )
}

export default Logo