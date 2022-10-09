import { useState, useEffect } from 'react';
import {  useParams, useNavigate } from 'react-router-dom';

const CreateBlogs = ({blogs,fetcher}) => {
    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    // const [author, setAuthor] = useState('');
    const params = useParams()
    const [id, setId] = useState(params.id)



    const navigate = useNavigate();

   

    const [formData, setFormData] = useState({
        title:"",
        body:"",
        author:"",
    })

    function handleInputChange (event){
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
      });
    }
   

    // const blog = { title, body, author };

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:3004/blogs/${id}`)
            .then(resp=>resp.json())
            .then((item)=>{
                setFormData(item);
            })
        }},
       [id]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        

         fetch(`http://localhost:3004/blogs/${id ? '/'+id : ''}`, {
            method: id ? "PUT" : "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }).then(() => {
          
            navigate('/Home');
            fetcher()
        })
    }

    return ( 
        <div className='createblogs'>
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text"
                    required
                    name='title' 
                    onChange={handleInputChange} 
                    value={formData.title}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    name='body' 
                    onChange={handleInputChange}
                    value={formData.body} 
                />
                <label>Blog author:</label>

                <input 
                    type="text"
                    required
                    name='author' 
                    onChange={handleInputChange}
                    value={formData.author} 
                />
            <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default CreateBlogs;