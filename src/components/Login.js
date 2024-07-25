import React, { useRef, useState } from 'react'
import Header from './Header'
import { SignInFormValidation, SignUpFormValidation } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
//import { useNavigate } from 'react-router-dom';
import { BG_IMAGE, DEFAULT_PHOTOURL } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    //const navigate = useNavigate();

    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);
    
    const HandleSubmitForm = () => {
        const formType = isSignInForm? "signIn": "signUp";
        let message = null;
        switch (formType) {
            case "signIn":
                message = SignInFormValidation(email.current.value, password.current.value);
                setErrorMessage(message);
                if(message) return;
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => { 
                    const user = userCredential.user;
                    // console.log(user);
                    // navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`${errorCode} - ${errorMessage}`);
                });
                break;

            case "signUp":
                message = SignUpFormValidation(email.current.value, password.current.value, confirmPassword.current.value);
                setErrorMessage(message);
                if(message) return;

                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    updateProfile(auth.currentUser, {
                        displayName: username.current.value, 
                        photoURL: DEFAULT_PHOTOURL
                      }).then(() => {
                        //navigate('/browse');
                      }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(`${errorCode} - ${errorMessage}`);
                      });                      
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`${errorCode} - ${errorMessage}`);
                });
                break;

            default:
                setErrorMessage("Internal Server Error!")
                break;
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div className=''>
            <Header isLoginPage={true} />
            <div>
                <img src={BG_IMAGE} alt='background' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black mx-auto top-60 right-0 left-0 text-white bg-opacity-60'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In": "Sign Up"}</h1>
                {!isSignInForm && <input ref={username} className='p-4 my-4 w-full bg-gray-500 text-white' type='text' placeholder=' Username'/>}
                <input ref={email} className='p-4 my-4 w-full bg-gray-500 text-white' type='text' placeholder=' Email Address'/>
                <input ref={password} className='p-4 my-4 w-full  bg-gray-500 text-white' type='password' placeholder=' Password'/>
                {!isSignInForm && <input ref={confirmPassword} className='p-4 my-4 w-full  bg-gray-500 text-white' type='password' placeholder=' Confirm Password'/>}
                <p className='text-red-500 font-bold'>{errorMessage}</p>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={HandleSubmitForm}>{isSignInForm? 'Sign In': 'Sign Up'}</button>
                <div>{isSignInForm? 'New to Netflix? ': 'Already Netflix user? '}<span className='font-bold cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? 'Sign Up now.': 'Sign In now.'}</span></div>
            </form>
        </div>
    )
}

export default Login
//prms id , implementation in progress
//science it is prms id it is allowed post authentication 