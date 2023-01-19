import {useState} from "react";

const Title = () => {
    return (
        <a href="/"><img 
        className="logo"
         alt="logo" src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"/>
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