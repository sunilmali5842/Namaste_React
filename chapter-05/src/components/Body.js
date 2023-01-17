import React from "react";
import ReactDOM from "react-dom/client";
import {restraurantList} from "../constant";
import RestaurantCard from "../components/RestaurantCard";
import {useState} from "react";


function filterData(searchInput,restaurants){
   return newData = restaurants.filter(
        (restaurant) =>
           
            restaurant.data.name.includes(searchInput)
        
    );

    
}

const Body = () =>{

    const [restaurants,setRestaurants] = useState(restraurantList);
    const [searchInput, setSearchInput] = useState("");
   

    return (
        <React.Fragment>
            
       
        <div className="searchContainer d-flex justify-content-center">
          <input type="text" placeholder="Search for Restaurants" value={searchInput} 
          onChange = { (e) => {
              setSearchInput(e.target.value)
          }}
          />
          <button className="search-btn" onClick={function (){

              // filter the data 

              const data = filterData(searchInput,restaurants);

              setRestaurants(data);

              // update the state variable
              
            
              
          }}>Search </button>
        </div>

        <div className="container">
        <h1 className="text-center"> Showing results for {searchInput}</h1>
          <div className="restraurant-section">

          {
              restaurants.map((restraurant) => {
                  return <RestaurantCard {...restraurant.data} />
                    
                 
              })
          }
                 
         
          </div>

        </div>

        </React.Fragment>
    );
};

export default Body;
