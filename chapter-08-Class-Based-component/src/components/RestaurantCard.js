import { IMG_CDN_URL } from "../constant";
const RestrurantCardList = ({name,cloudinaryImageId,deliveryTime,cuisines}) => {


    return(
        <>
        
        <div className="card">
          <div className="image">
            <img src={IMG_CDN_URL +
            cloudinaryImageId} />
          </div>
          <div className="desc">
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            
            <h4>{deliveryTime} minutes</h4>

          </div>

        </div>
        </>
    );
};



export default RestrurantCardList;