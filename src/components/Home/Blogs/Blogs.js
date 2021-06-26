import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

const Blogs = () => {
    
    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
        
        fetch('https://vast-everglades-60185.herokuapp.com/posts')
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
