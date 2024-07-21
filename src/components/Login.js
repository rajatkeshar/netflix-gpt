import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div className=''>
            <Header />
            <div>
                <img src='https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png' alt='background' />
            </div>
            <form className='w-3/12 absolute p-12 bg-black mx-auto top-60 right-0 left-0 text-white bg-opacity-60'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In": "Sign Up"}</h1>
                {!isSignInForm && <input className='p-4 my-4 w-full bg-gray-500 text-white' type='text' placeholder=' Username'/>}
                <input className='p-4 my-4 w-full bg-gray-500 text-white' type='text' placeholder=' Email Address'/>
                <input className='p-4 my-4 w-full  bg-gray-500 text-white' type='password' placeholder=' Password'/>
                {!isSignInForm && <input className='p-4 my-4 w-full  bg-gray-500 text-white' type='password' placeholder=' Confirm Password'/>}
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>
                <div>{isSignInForm? "New to Netflix? ": "Already Netflix user? "}<span className='font-bold cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "Sign Up now.": "Sign In now."}</span></div>
            </form>
        </div>
    )
}

export default Login