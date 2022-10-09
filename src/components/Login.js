import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';;



function Login ({setIsLoggedIn}){
 
    const [displayForm, setDisplayForm]= useState('none')
    const [hideForm, setHideForm] = useState('')
    const [display, setDisplay] = useState('none')
    const navigate = useNavigate();
    const [formInput, setFormInput] = useState(
      {
        username:"",
        password: "",
        email:""
      }
      
    )

    function handleChange(e) {
        setFormInput({
          ...formInput,
          [e.target.name]: e.target.value,
        });
      }
  
      function handleSubmit(e){
        e.preventDefault();
        setIsLoggedIn(true)
        setDisplay(null)
        navigate('/Home')
    }

    function showLogin(e){
      e.preventDefault();
      setDisplayForm('')
      setHideForm('none')
      
    }
    console.log(formInput)
    
return (
    <div className="login-page" >
      <div className="form">

       <form className="register-form" onSubmit={handleSubmit} style={{display:`${hideForm}`}} >
          <center> <h3 className="logo">Welcome </h3> </center>

          <input
           required
            name="username" 
            onBlur={handleChange} 
            type="text"  
            placeholder="name"/>

          <input  
          name="email" 
          onBlur={handleChange} 
          type="text" 
          required
           placeholder="email address"/>

          <input 
           name="password" 
           onBlur={handleChange} 
           type="password"  
           required
            placeholder="password"/>

          <button type="submit" onClick={showLogin} >create account</button>

          <p className="message">Already registered? <span onClick={showLogin} >Sign In</span></p>
      </form>

      <form className="login-form" onSubmit={handleSubmit} style={{display:`${displayForm}`}} >
         <center> <h3 className="logo">Welcome</h3> </center>
       
         <input  
          name="username" 
           onBlur={handleChange} 
           required 
           type="text"
           placeholder="Username"/>

         <input   
         name="password" 
         onBlur={handleChange}
         type="password" 
         required 
         placeholder="Password"/>

         <button 
         type="submit"
          onClick={handleSubmit}>login</button>

         <p className="message">Not registered? <span onClick={showLogin} >Create an account</span></p>
      </form>
  </div>
</div>
)
}


export default Login;