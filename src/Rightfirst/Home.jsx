import React, {useState} from 'react'
import Lgo from '/logo.svg'
import music from '../assets/music1.svg'
import SignIn from '../Popup/SignIn';
import cross from '../assets/cross.svg'

const Home = () => {
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [modalClass, setModalClass] = useState('modal');


    const openSignIn = () => {
        setIsSignInOpen(true);
        setModalClass('modal');
    }

    const closeSignIn = () => {
        setModalClass('modal-exit');
        setTimeout(() => setIsSignInOpen(false), 300);
    }
    return (
        <div className='w-[80vw] flex flex-col items-center'>
            <div className="heroSec w-[500px] ml-[50px]">
                <div className='flex items-center justify-center w-7 pt-5 mx-auto'>
                    <img src={Lgo} className="logo" alt="Ip Logo" />
                    <h5 className='text-2xl font-semibold text-ip-font'>IPStudio</h5>
                </div>
                <div className="para flex justify-center">
                    <h1 className='text-[45px] leading-tight heading w-[29.9rem] text-center py-4'>Discover new music every day.</h1>
                </div>
                <div className='flex justify-center mx-auto'>
                    <img src={music} alt="home" className='w-96 py-2 ' />
                </div>
                <div className="para1 flex justify-center">
                    <p className='text-center text-[17px] text-ip-font w-[29rem]'>Get playlists and albums inspired by the artists and genres you are listening to free.</p>
                </div>
                <button onClick={openSignIn} className='block mx-auto my-8 bg-ip-gradient2 px-10 py-2 rounded-md font-semibold tracking-normal'>Try It Free</button>
                {isSignInOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ip-grey bg-opacity-50">
                        <div className={`relative rounded-lg ${modalClass}`}>
                            <button
                                onClick={closeSignIn}
                                className="absolute top-4 left-4 text-gray-600 hover:text-gray-900">
                                <img src={cross} className="w-10 h-10" alt="Close" />
                            </button>
                            <SignIn />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home