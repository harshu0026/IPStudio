import React from 'react'
import speaker from '../assets/speaker.svg'
import { useState } from 'react'

const Volume = () => {
    const [value, setValue] = useState(50);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="volumeSec flex gap-1 mx-20 w-24">
            <img src={speaker} alt="home" className='w-4' />
            <input
                type='range'
                className='slider'
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
                style={{ '--progress': `${value}%` }}
            />
        </div>
    )
}

export default Volume