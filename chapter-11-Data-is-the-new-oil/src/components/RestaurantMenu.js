import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {

    // How to read dynamic URL's

    const params = useParams();
    const {resId} = params;

    // const [restaurant, setRestaurant] = useState();

    const restaurant = useRestaurant(resId);

    
    if(!restaurant){
        return <Shimmer />
    }
    return (
        <>
        <div className="container m-auto mt-16">
            <div className="restaurant-info shadow-md flex flex-wrap">
             <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
             <div className="textInfo p-4">
                <h1 className="font-medium">Restaurant ID : {resId}</h1>
                <h2>{restaurant.name} </h2>
                <p>{restaurant.cuisines?.join(", ")}</p>
                <p>{restaurant.avgRatingString} Star</p>
                <h3>{restaurant.area}, {restaurant.city}</h3>
             </div>
            </div>
             
        </div>
        <div className="container m-auto my-8">
          <div className="menuList">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                {Object.values(restaurant?.menu?.items).map((item) =>
                    (
                    <div className="menu-box shadow-sm my-2" key={item.id}>
                    <img src={IMG_CDN_URL + item.cloudinaryImageId}
                     alt={item.name} 
                     onError={(event) => {
                        event.target.src = "https://fscluster.org/sites/default/files/styles/core-group-featured-image/public/default-image.png?itok=VQtWqtdp"
                        event.onerror = null
                      }}
                      />
                    <h3 className="menu-title p-4 font-medium">{item.name}</h3> 
                    </div>
                    ) )}
            </div>
          </div>
        </div>
        </>
       
    )
};

export default RestaurantMenu;