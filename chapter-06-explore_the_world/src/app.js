import React from "react";
import ReactDOM from "react-dom/client";

// default export method
import Header from "./components/Header";

import Body from "./components/Body";
import Footer from "./components/Footer";

// import multiple things in one line 

// import * as obj from "./components/Header";




const AppLayout = () =>{
    return (
        <>
        {
            /*
            header - Logo + Navigation Bar
            Body - Search + Restrurant as cards
            Footer
            */
           
        }
        
        <Header />
        <Body/>
        <Footer />
        </>
        
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);