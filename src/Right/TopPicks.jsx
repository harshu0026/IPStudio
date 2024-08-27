import React, { useState, useRef } from 'react';
import card1 from '../assets/cards/card1.webp';
import card2 from '../assets/cards/card2.webp';
import card3 from '../assets/cards/card3.webp';
import card4 from '../assets/cards/card4.webp';
import play from '../assets/play1.svg';
import dots from '../assets/dots.svg';
import ruaan from '../assets/songs/Ruaan.mp3';
import tainu from '../assets/songs/Tainu-Khabar-Nahi.mp3';
import magic from '../assets/songs/Magic.mp3';
import bloody from '../assets/songs/Bloody Brazil.mp3';
import './mobile.css'


const cards = [
    { id: 1, title: 'New Release', img: card1, song: { id: 1, title: 'Song 1', src: ruaan }, details: 'Ruaan - Club Version - Single \n Pritam \n 2 August', bgClass: 'bg-ip-cardbg' },
    { id: 2, title: 'Listen Again', img: card2, song: { id: 2, title: 'Song 2', src: tainu }, details: 'Bollywood Hits \n A genre-spanning surge of effusive pop, \n cosy ballads and more.', bgClass: 'bg-ip-cardbg1' },
    { id: 3, title: 'Made for You', img: card3, song: { id: 3, title: 'Song 3', src: magic }, details: "Harsh's Stations", bgClass: 'bg-ip-cardbg2' },
    { id: 4, title: 'New Release', img: card4, song: { id: 4, title: 'Song 4', src: bloody }, details: 'BLOODY BRAZIL (Hardstyle) - Single \n TENZOO, askat \n 26 July', bgClass: 'bg-ip-cardbg3' },
];


const TopPicks = () => {

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
            <div className='pt-3 mx-7'>
                <h1 className='text-lg text-ip-font'>Top Picks for You</h1>
                <div className="cards flex gap-4 mainbar">
                    {cards.map((card) => (
                        <div key={card.id} className="card w-72 hov">
                            <h2 className='text-sm text-ip-font1 font-semibold pb-4'>{card.title}</h2>
                            <div className="img relative">
                                <img className='rounded-t-xl' src={card.img} alt={`card${card.id}`} />
                                <button onClick={() => playSong(card.song)} className='absolute left-2 bottom-2'>
                                    <img className='w-7' src={play} alt="playbtn" />
                                </button>
                                <a href="/#play" className='absolute right-2 bottom-2'>
                                    <img className='w-4 blue-circle' src={dots} alt="dotsbtn" />
                                </a>
                            </div>
                            <div className={`flex flex-col items-center py-2 h-16 rounded-b-xl ${card.bgClass}`}>
                                {card.details.split('\n').map((line, index) => (
                                    <p key={index} className='text-xs text-ip-font font-semibold'>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                    <audio ref={audioRef}/> 
                </div>
            </div>
    );
}

export default TopPicks;
