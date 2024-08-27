import React, { useState, useRef } from 'react'
import card1 from '../assets/favplalist/card1.webp'
import card2 from '../assets/favplalist/card2.webp'
import card3 from '../assets/favplalist/card3.webp'
import card4 from '../assets/favplalist/card4.webp'
import card5 from '../assets/favplalist/card5.webp'
import play from '../assets/play1.svg'
import dots from '../assets/dots.svg'
import goat from '../assets/songs/GOAT.mp3';
import leo from '../assets/songs/Leo.mp3';
import breath from '../assets/songs/BREATH.mp3';
import forever from '../assets/songs/Forever.mp3';
import moosetape from '../assets/songs/Moosetape.mp3';
import './mobile.css'

const cards = [
    { id: 1, img: card1, song: { id: 1, title: 'GOAT', src: goat }, details: 'Diljit Dosanjh Essentials \n Apple Music Punjabi' },
    { id: 2, img: card2, song: { id: 2, title: 'Leo', src: leo }, details: 'Leo - EP \n Shubh' },
    { id: 3, img: card3, song: { id: 3, title: 'BREATH', src: breath }, details: 'Hard Choices \n Gurinder Gill' },
    { id: 4, img: card4, song: { id: 4, title: 'Forever', src: forever }, details: 'Broken Silence - EP \n Tegi Pannu' },
    { id: 5, img: card5, song: { id: 5, title: 'Moosetape', src: moosetape }, details: 'Moosetape \n Sidhu Moose Wala' },
];

const FavPlalist = () => {

    const [currentSong, setCurrentSong] = useState(null);
    const audioRef = useRef(null);

    const playSong = (song) => {
        if (currentSong === song.id) {
            if (audioRef.current.paused) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        } else {
            audioRef.current.src = song.src;
            audioRef.current.play();
            setCurrentSong(song.id);
        }
    };

    return (
        <div className='cards flex gap-5 mainbar'>
            {cards.map(card => (
                <div key={card.id} className="card w-56 hov">
                    <div className="img relative">
                        <img className='rounded-xl' src={card.img} alt={`card${card.id}`} />
                        <button onClick={() => playSong(card.song)} className='absolute left-2 bottom-2'>
                            <img className='w-7' src={play} alt="playbtn" />
                        </button>
                        <a href="/#play" className='absolute right-2 bottom-2'>
                            <img className='w-4 blue-circle' src={dots} alt="dotsbtn" />
                        </a>
                    </div>
                    <div className='flex flex-col items-start py-2 h-16 rounded-b-xl'>
                        {card.details.split('\n').map((line, index) => (
                            <p key={index} className={`text-xs ${index === 0 ? 'text-ip-font font-semibold' : 'text-ip-font2 font-semibold'}`}>
                                {line}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
            <audio ref={audioRef} />
        </div>
    )
}

export default FavPlalist