import { IMG_CDN_URL } from "../constant";
const RestrurantCardList = ({name,cloudinaryImageId,deliveryTime,cuisines,user}) => {


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
            <h5>{user.name}</h5>

          </div>

        </div>
        </>
    );
};



export default RestrurantCardList;