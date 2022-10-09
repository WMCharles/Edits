
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
 import BlogDetails from './components/BlogDetails';
import CreateBlogs from "./components/CreateBlogs";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Login from './components/Login';




const App = () => {
  const[blogs, setBlogs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  const fetcher = () =>{
      fetch("http://localhost:3004/blogs")
      .then((response) => response.json())
      .then((data) => {
          //  console.log(data)
        setBlogs(data);
          });
  }

  useEffect(() => {
      fetcher()
      
      }, []);

  
  return (
    <Router>
      <div>
        <Navbar  />
        <div>
          <Routes>
            <Route exact path="/" element={<Login  setIsLoggedIn={setIsLoggedIn}/> } />
            <Route  path="Home" element={ <Home blogs={blogs} />} />
            <Route exact path="CreateBlogs" element={<CreateBlogs blogs={blogs} fetcher={fetcher}  />} />
            <Route path="blogs/:id" element={<BlogDetails  blogs={blogs}   fetcher={fetcher}  />}   />
            <Route path="blogs/CreateBlogs/edit/:id" element={<CreateBlogs blogs={blogs} fetcher={fetcher} />}   />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
