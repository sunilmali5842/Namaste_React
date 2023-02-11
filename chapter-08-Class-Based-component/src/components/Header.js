import {useState} from "react";
import{useEffect} from "react";
import Logo from "../assets/images/logo.jpg";
import {Link} from "react-router-dom";

const Title = () => {
    return (
        <a href="/"><img 
        className="logo"
         alt="logo" src={Logo}/>
         </a>

    )
}


const Header = () =>{
    
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(() => {
        
    },[isLoggedIn]);
    
    return (
     <div className="header">
       <Title/>

     
       <ul className="navbar d-flex">
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About Us</Link></li>
         <li><Link to="/">Restrurants</Link></li>
         <li><Link to="/contact">Contact</Link></li>
         <li><Link to="/cart">CART</Link></li>
 
       </ul>
       <div className="authentication">
       {
           (isLoggedIn ? <button className="btn-danger" onClick={() => setIsLoggedIn(false)}>Log Out</button> : <button className="btn-primary" onClick={() => setIsLoggedIn(true)}>Log In</button>   )
       }
         
         
       </div>
     </div>
 );
 
 };

export default Header;