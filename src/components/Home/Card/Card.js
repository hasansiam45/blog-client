import React from 'react'
import { useHistory } from 'react-router-dom'

const Card = ({ blog }) => {
    
    const blogText = blog.blog.slice(0, 100)
    const history = useHistory()
    
    const handleClick = id => {
    
        history.push(`/singleBlog/${id}`)
        
    
    }


    
    return (
        
        <div className="card p-5 border-solid border-2 border-light-blue-700">
            <img className="w-full h-32 sm:h-48 object-cover" src={blog.img} alt="" />
            <div className="m-4">
                <span className="font-bold">Title: {blog.title}</span>
                <span className="block text-gray-500 text-sm">Author: {blog.name}</span>
            </div>
            
            <div className="border-solid border-2 border-black-500 p-3">
                <p className="m-3">{blogText}....</p>
                <button onClick={()=>handleClick(blog._id)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Read More</button>
            </div>
        </div>
    )
}

export default Card
