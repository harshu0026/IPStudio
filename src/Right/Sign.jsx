import React, {useState} from 'react';
import signin from '../assets/signin.svg';
import SignIn from '../Popup/SignIn';
import cross from '../assets/cross.svg'

const Sign = () => {
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
        <div className='min-w-[10vw]'>
            <button
                className='flex gap-1 py-1 px-3 mx-2 my-4 rounded-md bg-ip-gradient2 items-center'
                onClick={openSignIn}
            >
                <img src={signin} alt="Sign In" className='w-5' />
                <h5 className='text-xs font-bold text-white'>Sign In</h5>
            </button>
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
    );
}

export default Sign;
