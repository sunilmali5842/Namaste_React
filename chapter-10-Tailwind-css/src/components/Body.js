import React from "react";
import ReactDOM from "react-dom/client";
import {restraurantList} from "../constant";
import RestaurantCard from "../components/RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline from "../utils/useOnline";


const Body = () =>{

    
    const [allRestaurants,setAllRestaurants] = useState("");
    const [filteredRestaurants,setFilteredRestaurants] = useState("");
    const [searchInput, setSearchInput] = useState("");
   
    // Empty dependecy array = Once after render
    // dep array [serachText] = Once after initial render + everytime after re-render i.e. when search text changes

    useEffect(() => {
        // API CALL
        getRestaurants();

    },[]

    );
    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();


        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    const isOnline = useOnline();
    
   

    if(!isOnline){ 
        return (
            <div className="container">
            <h1 className="text-xl" style={{color: "red"}}> Ooops !!! you are offline.. Please check your Internet Connection </h1>
            </div>
        )
    }

    // Not render component - ( Early return )


   
    return allRestaurants.length === 0 ? 
    ( <Shimmer/> ) : (
        <React.Fragment>
            
       
        <div className="searchContainer flex justify-center my-16">
          <input className="border p-4 w-1/2" type="text" placeholder="Search for Restaurants" value={searchInput} 
          onChange = { (e) => {
              setSearchInput(e.target.value)
          }}
          />
          <button className="search-btn p-4 bg-green-700 text-white" onClick={function (){

              // filter the data 

              const data = filterData(searchInput,allRestaurants);

              setFilteredRestaurants(data);

              // update the state variable
              
            
              
          }}>Search </button>
        </div>

        <div className="container m-auto">
        {
              (
                filteredRestaurants.length === 0 ? <h1 className="text-center text-4xl font-bold my-6"> No Restaurants Found </h1> :  null
                

              )
              
          }
          {
              (   searchInput.length === 0 ? <h1 className="text-center text-4xl font-bold my-6"> All Restaurants </h1> :  filteredRestaurants.length != 0 ? <h1 className="text-center text-4xl font-bold my-6"> Showing results for {searchInput} </h1> : null
              )
          }
          
          <div className="restraurant-section flex flex-wrap justify-center">
          
          

          {
            
              filteredRestaurants.map((restraurant) => {
                  return (
                  <Link to={"restaurant/" + restraurant?.data.id} key={restraurant.data.id}>
                  <RestaurantCard {...restraurant.data} />
                  </Link>
                  );
                    
                 
              })
          }
                 
         
          </div>

        </div>

        </React.Fragment>
    );
};

export default Body;
