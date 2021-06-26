import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import MyNavbar from '../../Home/MyNavbar/MyNavbar';

const AddPost = () => {
    
    const [imgUrl,setImgUrl] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
    
        const blogPost = {
        
            name: data.name,
            title: data.title,
            blog: data.blog,
            img: imgUrl
        }
        
        fetch('https://vast-everglades-60185.herokuapp.com/addPost', {
        
            method: 'POST',
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(blogPost)
        
        })
        .then(res=> {
            alert('Blog added Successfully')
            console.log(res)})
        
    };
    
    
    const handleImgUpload = event => {
    
        const imgData = new FormData();
        imgData.set('key', '7dcc06ccc3c242fb63b892bea304ea0c')
        imgData.append('image', event.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(res => {
            
                console.log(res)
                setImgUrl(res.data.data.display_url)
                console.log(res.data.data.display_url)
            
            })
    
    }
    
    
    return (
        
        <div>
        
            <MyNavbar></MyNavbar>
            
            
            <div className="p-10 bg-black text-white">
                <h1 className="text-center text-4xl pb-5">Add Your Post here</h1>
             <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
      
                <input className="p-2 outline-none rounded text-black" placeholder="Your Name" {...register("name", { required: true })} /> <br /> <br />
                
                <input className="p-2 outline-none rounded text-black" placeholder="Blog Title" {...register("title", { required: true })} /> <br /> <br />
                
                <input className="p-2 outline-none rounded" name="image" type="file" onChange={handleImgUpload} /> <br /> <br />
                
                <textarea className="p-2 outline-none rounded text-black" rows="6" cols="35" placeholder="Your Blog" {...register("blog", { required: true })} /> <br /> <br />
                            
                
                    {errors.name && <p className="text-danger">Name is required</p>}
                    {errors.title && <p className="text-danger">Title is required</p>} 
                    {errors.image && <p className="text-danger">Image is required</p>}
                    {errors.blog && <p className="text-danger">Blog is required</p>} 
                    
                
       <input className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer" type="submit" />

      
      
    </form>
            </div>
            
        </div>
    )
}

export default AddPost
