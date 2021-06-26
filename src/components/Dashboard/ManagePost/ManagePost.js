import React from 'react'
import {useEffect, useState } from 'react'
import MyNavbar from '../../Home/MyNavbar/MyNavbar'
import Footer from '../../Home/Footer/Footer'

const ManagePost = () => {
    
    const [allBlogs, setAllBlogs] = useState([])
    
     useEffect(() => {
        
        fetch('https://vast-everglades-60185.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllBlogs(data)
            })
    }, [])

    
    const handleDelete = id => {
    
    fetch(`https://vast-everglades-60185.herokuapp.com/delete/${id}`,{

        method: 'DELETE'
    
    })
            .then(res => res.json())
            .then(result => console.log(result))
    
    }

    
    return (

        <div>
        <MyNavbar></MyNavbar>
            <div className="grid lg:grid-cols-3 gap-5 m-3">
            {
                
                allBlogs.map(blogs =>
                    <div className="card p-5 border-solid border-2 border-light-blue-700">
                        <img className="w-full h-32 sm:h-48 object-cover" src={blogs.img} alt="" />
                        <div className="m-4">
                            <span className="font-bold">Title: {blogs.title}</span>
                            <span className="block text-gray-500 text-sm">Author: {blogs.name}</span>
                        </div>
                        
                        <div className="border-solid border-2 border-black-500 p-3">
                            <p className="m-3">{blogs.blog}....</p>
                            <button onClick={()=>handleDelete(blogs._id)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Delete</button>
                        </div>
                    </div>
                )
            
            }
        </div>
        <Footer></Footer>
        </div>
    )
}

export default ManagePost
