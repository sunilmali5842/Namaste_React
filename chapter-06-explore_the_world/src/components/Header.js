import {useState} from "react";
import Logo from "../assets/images/logo.jpg";

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
    
    return (
     <div className="header">
       <Title/>

     {isLoggedIn}
       <ul className="navbar d-flex">
         <li><a href="/">Home</a></li>
         <li><a href="/">About</a></li>
         <li><a href="/">Restrurants</a></li>
         <li><a href="/">Contact</a></li>
         <li><a href="/cart">CART</a></li>
 
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