import {useState,useContext} from "react";
import{useEffect} from "react";
import Logo from "../assets/images/logo.jpg";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline"
import isOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux";




const Title = () => {

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);

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

    const cartItems = useSelector(store => store.cart.items);

    console.log(cartItems);

    useEffect(() => {
        
    },[isLoggedIn]);
    
    return (
    <>
    <div className="shadow-md">
     <div className="header relative container m-auto flex flex-wrap justify-between items-center p-4 max-[600px]:flex-col">
       <Title/>

    
       <ul className="navbar flex flex-wrap sm:flex-row max-[600px]:flex-col max-[600px]:hidden">
         <li className="p-2"><Link class="uppercase hover:text-pink-600" to="/">Home</Link></li>
         <li className="p-2"><Link class="uppercase hover:text-pink-600" to="/about">About Us</Link></li>
         <li className="p-2"><Link class="uppercase hover:text-pink-600" to="/">Restrurants</Link></li>
         <li className="p-2"><Link class="uppercase hover:text-pink-600" to="/contact">Contact</Link></li>
         <li className="p-2"><Link class="uppercase hover:text-pink-600" to="/instamart">Instamart</Link></li>
         <li className="p-2"><Link class="uppercase hover:text-pink-600" to="/cart">CART ({cartItems.length} Items)</Link></li>
 
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