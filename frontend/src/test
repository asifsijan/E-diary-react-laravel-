import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img1 from '../img/portfolio-06.jpg'

const BlogInput = () => {
    const [input, setInput] = useState({
        blogID: '',
        title: '',
        img1: '',
        img2: '',
        date: '',
        client: '',
        technology: '',
        details: '',
    })
    const [blogID,setBlogID]=useState('');
    const handleBlogCount=()=>{
        fetch("/blogs/allBlogs")
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(jsonRes => {
                const nextID=jsonRes.length+1;
                
                setBlogID("b000".concat(nextID));
                
            });
    }
    useEffect(() => {
        handleBlogCount();
        
    })
    const handleOnchangeBlog = (event) => {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })

    }
    const handleClickSubmitBlog = (event) => {
        event.preventDefault();
        const newBlog = {
            blogID: blogID,
            title: input.title,
            img1: input.img1,
            img2: input.img2,
            date: input.date,
            details: input.details,

        }
        axios.post("http://localhost:3001/blogs/createBlog", newBlog)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        setInput({
            blogID: '',
            title: '',
            img1: '',
            img2: '',
            date: '',
            details: ''
        });
        handleBlogCount();
        alert("Blog Added Successfully");

    }



    return (
        <div>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    The title <strong>of my project</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">Enter the project Information</p>
                <img src={img1} alt="" className="intro__img" />
            </section>

            <div className="portfolio-item-individual">
                <form className="my_input_form">
                    <div className="form-group my_input_form-input">
                        <input value={blogID} onChange={handleOnchangeBlog} autoComplete="off" name="blogID" type="text" className="form-control" placeholder="Blog ID" disabled />
                    </div>
                    <div className="form-group my_input_form-input">
                        <input value={input.title} onChange={handleOnchangeBlog} autoComplete="off" name="title" type="text" className="form-control" placeholder="Blog Title" />
                    </div>
                    <div className="form-group my_input_form-input">
                        <input value={input.img1} onChange={handleOnchangeBlog} autoComplete="off" name="img1" type="text" className="form-control" placeholder="Image 1 link" />
                    </div>
                    <div className="form-group my_input_form-input">
                        <input value={input.img2} onChange={handleOnchangeBlog} autoComplete="off" name="img2" type="text" className="form-control" placeholder="Image 2 Link" />
                    </div>
                    <div className="form-group my_input_form-input">
                        <input value={input.date} onChange={handleOnchangeBlog} autoComplete="off" name="date" type="Date" className="form-control" placeholder="Date" />
                    </div>

                    <div className="form-group my_input_form-input">
                        <textarea value={input.details} onChange={handleOnchangeBlog} autoComplete="off" name="details" className="form-control" rows="3" placeholder="Details"></textarea>
                    </div>


                    <button onClick={handleClickSubmitBlog} type="submit" className=" my_input_form-btn">PUBLISH BLOG</button>
                </form>

            </div>
        </div>
    );
};

export default BlogInput;