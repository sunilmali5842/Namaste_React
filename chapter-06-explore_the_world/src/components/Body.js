import React from "react";
import ReactDOM from "react-dom/client";
import {restraurantList} from "../constant";
import RestaurantCard from "../components/RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";


function filterData(searchInput,restaurants){
   return newData = restaurants.filter(
        (restaurant) =>
           
            restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
        
    );

    
}

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
    

    // Not render component - ( Early return )

    if(!allRestaurants) return null;

   
    return allRestaurants.length === 0 ? 
    ( <Shimmer/> ) : (
        <React.Fragment>
            
       
        <div className="searchContainer d-flex justify-content-center">
          <input type="text" placeholder="Search for Restaurants" value={searchInput} 
          onChange = { (e) => {
              setSearchInput(e.target.value)
          }}
          />
          <button className="search-btn" onClick={function (){

              // filter the data 

              const data = filterData(searchInput,allRestaurants);

              setFilteredRestaurants(data);

              // update the state variable
              
            
              
          }}>Search </button>
        </div>

        <div className="container">
        {
              (
                filteredRestaurants.length === 0 ? <h1 className="text-center"> No Restaurants Found </h1> :  null
                

              )
              
          }
          {
              (   searchInput.length === 0 ? <h1 className="text-center"> All Restaurants </h1> :  filteredRestaurants.length != 0 ? <h1 className="text-center"> Showing results for {searchInput} </h1> : null
              )
          }
          
          <div className="restraurant-section">
          
          

          {
            
              filteredRestaurants.map((restraurant) => {
                  return <RestaurantCard {...restraurant.data} key={restraurant.data.id} />
                    
                 
              })
          }
                 
         
          </div>

        </div>

        </React.Fragment>
    );
};

export default Body;
