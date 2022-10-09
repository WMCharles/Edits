import React from 'react';

import BlogList from './BlogList';




const Home = ({blogs}) => {
  
    

    return (
        <div>
              <BlogList blogs={blogs} title="My Blog Items"/>  
              

        </div>


    ); 
};

export default Home;