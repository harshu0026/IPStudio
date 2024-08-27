import React, { useState, useRef } from 'react'
import card1 from '../assets/recentcards/card1.webp'
import card2 from '../assets/recentcards/card2.webp'
import card3 from '../assets/recentcards/card3.webp'
import card4 from '../assets/recentcards/card4.webp'
import card5 from '../assets/recentcards/card5.webp'
import play from '../assets/play1.svg'
import dots from '../assets/dots.svg'
import admire from '../assets/songs/Admirin You.mp3';
import osajni from '../assets/songs/O-Sajni-Re.mp3';
import krishna from '../assets/songs/Krishna Teri Ho Gyi.mp3';
import achyutam from '../assets/songs/Achyutam Keshavam.mp3';
import omaahi from '../assets/songs/O-Maahi.mp3';
import './mobile.css'

const cards = [
    { id: 1, img: card1, song: { id: 1, title: 'Summer High', src: admire }, details: 'Karan Aujla & Similar Artists'},
    { id: 2, img: card2, song: { id: 2, title: 'O Sajni Re', src: osajni }, details: 'Laapataa Ladies (Original Motion Picture Soundtrack) \n Ram Sampath, Divyanidhi Sharma,...', },
    { id: 3, img: card3, song: { id: 3, title: 'Krishna Teri Ho Gyi', src: krishna }, details: 'Krishna Teri Ho Gyi - Single \n Asees Kaur, \n Jaani',},
    { id: 4, img: card4, song: { id: 4, title: 'Achyutam Keshavam', src: achyutam }, details: 'Achyutam Keshavam \n Trisha Parui, Madhuraa Bhattacharya, \n Arjit Charaborty',},
    { id: 5, img: card5, song: { id: 5, title: 'O Maahi', src: omaahi }, details: 'Dunki (Original Motion Picture Soundtrack) \n Pritam, Swanand Kirkire, IP Singh,...',},
];

const RecentCards = () => {

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
                <div key={card.id} className= "card w-56 hov" >
                    <div className="img relative">
                        <img className='rounded-xl' src={card.img} alt={`card${card.id}`} />
                        <button onClick={()=> playSong(card.song)} className='absolute left-2 bottom-2'>
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
            <audio ref={audioRef}/>
        </div>
    )
}

export default RecentCards