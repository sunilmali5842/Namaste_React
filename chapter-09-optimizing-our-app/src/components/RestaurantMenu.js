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
        <div className="container">
            <div className="restaurant-info box-shadow d-flex">
             <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
             <div className="textInfo p-4">
                <h1>Restaurant ID : {resId}</h1>
                <h2>{restaurant.name} </h2>
                <p>{restaurant.cuisines?.join(", ")}</p>
                <p>{restaurant.avgRatingString} Star</p>
                <h3>{restaurant.area}, {restaurant.city}</h3>
             </div>
            </div>
             
        </div>
        <div className="container">
          <div className="menuList">
            <div className="d-flex flex-wrap justify-content-between">
                {Object.values(restaurant?.menu?.items).map((item) =>
                    (
                    <div className="menu-box box-shadow" key={item.id}>
                    <img src={IMG_CDN_URL + item.cloudinaryImageId}
                     alt={item.name} 
                     onError={(event) => {
                        event.target.src = "https://fscluster.org/sites/default/files/styles/core-group-featured-image/public/default-image.png?itok=VQtWqtdp"
                        event.onerror = null
                      }}
                      />
                    <h3 className="menu-title">{item.name}</h3> 
                    </div>
                    ) )}
            </div>
          </div>
        </div>
        </>
       
    )
};

export default RestaurantMenu;