import React from 'react';
import { Link,Outlet} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            
            <div className='navbar'>

               <h1>My Blog App</h1>
               <Link to="/">Login</Link>
                <Link to="/Home">Home</Link>
                <Link to="/CreateBlogs">Create Blog</Link>

            </div>
            <Outlet />
        </nav>
     );
}

export default Navbar;