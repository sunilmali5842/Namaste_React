import React from "react";
import ReactDOM from "react-dom/client";

// import like this when we use default export method for components
import Header from "./components/Header";

import About from "./components/About";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
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
        <Outlet/>
        <Footer />
        </>
        
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
                children:[
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                ]
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
        ],
    },
    
    
])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);