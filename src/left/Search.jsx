import React from 'react'

const Search = () => {
    return (
        <div className='py-2'>
            <input
                type="text"
                name="search"
                placeholder="Search"
                className="w-48 mx-8 my-3 h-8 px-12 bg-ip-black border border-gray-600 rounded-md text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-ip-pink focus:border-ip-pink bg-[url('/src/assets/search.svg')] bg-[12px_center] bg-no-repeat"
            />
        </div>
    )
}

export default Search