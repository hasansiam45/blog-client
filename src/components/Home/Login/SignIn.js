import React, { useContext, useState } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App'
import MyNavbar from '../MyNavbar/MyNavbar'
import firebaseConfig from './firebase.config'
import { useHistory, useLocation } from 'react-router';

const SignIn = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } }
    
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleSubmit = event => {
    
        event.preventDefault();
        
         firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                   const { displayName, email } = userCredential.user;
        
                    const signedInUser = {
                        name: displayName,
                        email
                    }
        
                setLoggedInUser(signedInUser);
                alert('signed in successfully')
                history.replace(from)
                

                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
            });
    
    }
    
    return (
    
    
            
            <div>
                
                <form className="text-center text-black" action="" onSubmit={handleSubmit}>
                    
                <h1 className="text-3xl text-white">Please Sign in First</h1> <br />
            
                <input placeholder="Your Email" type="email" onChange={(e)=>setEmail(e.target.value)} /> <br /> <br />
                <input placeholder="Your Password" type="password" onChange={(e)=>setPassword(e.target.value)} /> <br /> <br />
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"type="submit">Sign In</button>
                
               </form>
            
            </div>
            
     
    )
}

export default SignIn
