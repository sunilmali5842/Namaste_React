import {useState,useContext} from "react";
import{useEffect} from "react";
import Logo from "../assets/images/logo.jpg";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline"
import isOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext"
const Title = () => {
    return (
        <a href="/" className=""><img 
        className="logo w-40"
         alt="logo" src={Logo}/>
         </a>

    )
}


const Header = () =>{
    
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const isOnline = useOnline();

    const {userInfo} = useContext(UserContext);

    useEffect(() => {
        
    },[isLoggedIn]);
    
    return (
    <>
    <div className="shadow-md">
     <div className="header relative container m-auto flex flex-wrap justify-between items-center p-4 max-[600px]:flex-col">
       <Title/>

       <div class="absolute inset-y-0 left-0 top:20 sm:hidden">
        <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
         
            
         
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
       <ul className="navbar flex flex-wrap sm:flex-row max-[600px]:flex-col max-[600px]:hidden">
         <li className="p-2"><Link class="uppercase hover:text-pink-600" to="/">Home</Link></li>
         <li className="p-2"><Link class="uppercase hover:text-pink-600" to="/about">About Us</Link></li>
         <li className="p-2"><Link class="uppercase hover:text-pink-600" to="/">Restrurants</Link></li>
         <li className="p-2"><Link class="uppercase hover:text-pink-600" to="/contact">Contact</Link></li>
         <li className="p-2"><Link class="uppercase hover:text-pink-600" to="/instamart">Instamart</Link></li>
         <li className="p-2"><Link class="uppercase hover:text-pink-600" to="/cart">CART</Link></li>
 
       </ul>
       <span className="font-bold">{userInfo.name}</span>
       {
           (isOnline ? <div className="show-online bg-green-700 w-10 h-10 rounded-full max-[600px]:hidden"></div> : <div className="show-offline bg-red-700 w-40 rounded-full max-[600px]:hidden"></div>)
       }
       <div className="authentication">
       {
           (isLoggedIn ? <button className="btn-danger bg-red-700 text-white p-4 max-[600px]:my-8" onClick={() => setIsLoggedIn(false)}>Log Out</button> : <button className="btn-primary bg-green-700 text-white p-4 max-[600px]:my-8" onClick={() => setIsLoggedIn(true)}>Log In</button>   )
       }
         
         
       </div>
     </div>
     </div>
     </>
 );
 
 };

export default Header;