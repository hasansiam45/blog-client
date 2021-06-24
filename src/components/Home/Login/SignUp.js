import React, { useState } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

const SignUp = () => {
    
    if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
    }
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
     const handleSubmit = (event) => {
        event.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((userCredential) => {
        // Signed in 
            var user = userCredential.user;
            console.log(user)
            alert('User account created successfully. Please Sign in with your account')
        // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
    
    };
    
    return (
        
        <div>
            <form action="" className="text-black" onSubmit={handleSubmit}>
            <h1 className="text-3xl text-white">Please Sign Up First</h1> <br />
                <input placeholder="Enter Your Email" type="email" onChange={(e)=>setEmail(e.target.value)} /> <br /> <br />
                <input placeholder="Create Password" type="password" onChange={(e)=>setPassword(e.target.value)} /> <br /> <br />
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"type="submit">Sign Up</button>
                
            </form>
        </div>
    )
}

export default SignUp
