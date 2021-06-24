import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import MyNavbar from '../MyNavbar/MyNavbar'

const Login = () => {
    
    
        const handleSignUp = () => {
        document.getElementById('signUp').style.cssText = 'display: block'
        document.getElementById('signIn').style.cssText = 'display: none'
    }
    
    const handleSignIn = () => {
        document.getElementById('signIn').style.cssText = 'display: block'
        document.getElementById('signUp').style.cssText = 'display: none'
    }
    
    return (
            
        <div>
            
            <MyNavbar></MyNavbar>
                <div className="text-center py-32 bg-black text-white">
                    
                <div id="signIn">
                    <SignIn></SignIn>
                    <h6>New User? <button className=""onClick={handleSignUp}>Sign Up</button></h6>
                </div>
                
                <div id="signUp" style={{display: 'none'}}>
                    <SignUp></SignUp>
                    <h6>Already have an account?  <button className=""onClick={handleSignIn}>Sign In</button></h6>
                </div>
                
                </div>
            </div>
            
       
        
    )
}

export default Login
