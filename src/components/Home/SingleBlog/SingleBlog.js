import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MyNavbar from '../MyNavbar/MyNavbar'

const SingleBlog = () => {
    
    const { id } = useParams()
    const [allBlogs, setAllBlogs] = useState([]);
    
    useEffect(() => {
            fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => {
                setAllBlogs(data)
            })
    }, [])
  
    const myData = allBlogs.find(blog => blog._id === id)
    
    
    return (
        
        <div>
            <MyNavbar></MyNavbar>
            
         <div className="p-5">
                <img className="w-full h-72" src={myData?.img} alt="" />
                
                <p className="text-center font-bold text-3xl mt-3">Title: {myData?.title}</p>
                
                <p className="text-center mb-3">Author: {myData?.name}</p>
            
                <p>{myData?.blog}</p>
            
                
            </div>
            
        </div>
    )
}

export default SingleBlog
