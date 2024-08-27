import React from 'react'
import Lgo from "/logo.png"
import privacy from '../assets/privacy.svg'


const SignIn = () => {
    return (
        <div className='container bg-[#0000007A] max-w-screen flex flex-col items-center justify-center'>
            <div className="card max-w-[1000px]">
                <div className="cardetails bg-ip-grey w-[800px] h-[600px] flex flex-col items-center pt-20 pb-5 px-10">
                    <div className='flex items-center w-10 mx-3'>
                        <img src={Lgo} className="logo" alt="Ip Logo" />
                    </div>
                    <h1 className='text-[#f5F5F7] text-3xl py-3'>Sign In or Sign Up</h1>
                    <p className='text-[#86868B] text-lg py-3'>Enter your email address to get started.</p>
                    <input
                        type="text"
                        name="SignUp or SignIn"
                        placeholder="Enter Your Email"
                        className="w-[480px] mx-8 mt-3 mb-4 h-[56px] px-4 bg-ip-black border border-gray-600 rounded-xl text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-ip-lgrey bg-[12px_center] bg-no-repeat"
                    />
                    <div className='flex items-center w-10 mx-3 my-5'>
                        <img src={privacy} className="logo" alt="Ip Logo" />
                    </div>
                    <p className='text-ip-font text-[11px] text-center w-[480px] mt-1'>Your IPStudio Account information is used to allow you to sign in securely and access your data. IPStudio records certain data for security, support and reporting purposes. If you agree, IPStudio may also use your IPStudio Account information to send you marketing emails and communications, including based on your use of IPStudio services. </p>
                    <a className='text-[11px] text-ip-red underline font-medium'>See how your data is managed...</a>
                    <button className='bg-ip-gradient2 px-24 py-2 rounded-lg text-lg my-5'><span className='text-ip-font'>Continue</span></button>
                </div>
            </div>
        </div>
    )
}

export default SignIn