import React, { useContext } from "react";

import { IMG_CDN_URL } from "../constant";
import UserContext from "../utils/UserContext";

const RestrurantCardList = ({name,cloudinaryImageId,deliveryTime,cuisines,user}) => {

const {userInfo} = useContext(UserContext);
    return(
        <>
        
        <div className="card w-72 my-4 shadow-md mx-4">
          <div className="image">
            <img src={IMG_CDN_URL +
            cloudinaryImageId} />
          </div>
          <div className="desc p-4">
            <h3 className="font-bold my-4">{name}</h3>
            <p>{cuisines.join(", ")}</p>
            
            <h4>{deliveryTime} minutes</h4>
            <h6>{userInfo.name} - {userInfo.email}</h6>

          </div>

        </div>
        </>
    );
};



export default RestrurantCardList;