import React from 'react';
import { Link } from 'react-router-dom';
// import BlogDetails from './BlogDetails';



const BlogList = ({blogs, title}) => {

  const blogLists = blogs.map(blog => ( 

    <div className='bloglists' key={blog.id}>
        
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
        </Link>
     
    </div>
))

    return (
        <div className='blogs'>
           <h1>{title}</h1>
           {blogLists}
        
        </div>
   
        
    );
};

export default BlogList;