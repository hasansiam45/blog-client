import React from 'react'
import img1 from '../../../img/1.jpg'

const Header = () => {
    
    return (
        
        <div className="flex items-center" style={{height: '88vh', backgroundImage: `url(${img1})`,backgroundSize: 'cover',backgroundPosition: '100% 100%',opacity: '0.8'}} >
           <h1 className="m-auto w-100 text-black text-4xl font-black font-mono">Welcome to our Blog</h1>
        </div>
    )
}

export default Header
