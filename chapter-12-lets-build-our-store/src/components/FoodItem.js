import { IMG_CDN_URL } from "../constant";



const FoodItem = ({name,cloudinaryImageId,category,description,price}) => {

    return (

     <>
        
        <div className="card w-72 my-4 shadow-md mx-4">
          <div className="image">
          <img src={IMG_CDN_URL + cloudinaryImageId}
                     alt={name} 
                     onError={(event) => {
                        event.target.src = "https://fscluster.org/sites/default/files/styles/core-group-featured-image/public/default-image.png?itok=VQtWqtdp"
                        event.onerror = null
                      }}
                      />
          </div>
          <div className="desc p-4">
            <h3 className="font-bold my-4">{name}</h3>
            <h3 className="font-bold my-4">Price : {price/100} Rs.</h3>
            <p>category : {category}</p>
            
            <h6>{description}</h6>

          </div>

        </div>
        </>
    )
};

export default FoodItem;