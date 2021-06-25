import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

const Blogs = () => {
    
    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
        
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBlogs(data)
            })
    }, [])
    
    
    return (
        
        <div className="grid lg:grid-cols-3 gap-5 m-3">
            {
            blogs.map(blog => <Card blog={blog}></Card> )
            }
        </div>
    )
}

export default Blogs
