import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";

// import like this when we use default export method for components
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";

const About = lazy(() => import("./components/About"));

// import multiple things in one line 

// import * as obj from "./components/Header";

// Chunking
// Lazy loading
// Code splitting
// Dynamic bunding
// On demand loading
// Dynamic Import

const Instamart = lazy(() => import("./components/Instamart") );

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
                element: <Suspense><About /></Suspense>,
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
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}> <Instamart />  </Suspense>,
               
            },
        ],
    },
    
    
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);