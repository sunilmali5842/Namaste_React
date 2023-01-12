import React from "react";
import ReactDOM from "react-dom/client";




const HeaderComponent = () =>{
   return (
    <div className="header">

      <img className="logo" src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"/>
      <ul className="navbar d-flex">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Restrurants</a></li>
        <li><a href="/">Contact</a></li>
        <li><a href="/cart">CART</a></li>

      </ul>
    </div>
);

};

const restraurantList = [
    {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "307668",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "uuid": "01d6215b-464f-4f4b-a57e-5d90cbaf5e2f",
        "city": "6",
        "area": "Karve Nagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "cav4arr73zilphdn0xac",
        "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 6.400000095367432,
        "slugs": {
        "restaurant": "kwality-walls-kothrud-kothrud-3",
        "city": "pune"
        },
        "cityState": "6",
        "address": "Sr No 8/12/2, CTS No 385, Maharshi Karve Nagar, Pune, Maharashtra-411052",
        "locality": "Anand Rao Thorat Path",
        "parentId": 582,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5714062~p=1~eid=00000185-a7f5-ae9c-2f55-53fe00b8014e",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "6.4 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "307668",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 6.400000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.6",
        "totalRatings": 100,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "230621",
        "name": "Al Madina Biryani House",
        "uuid": "3cabfe11-d03e-4b5e-b49e-a5babc0dfa6d",
        "city": "6",
        "area": "Camp",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "kupskpqk6pzohh9a5dci",
        "cuisines": [
        "Biryani",
        "Chinese",
        "North Indian",
        "Mughlai",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 3,
        "slugs": {
        "restaurant": "al-madina-biryani-house-camp-camp",
        "city": "pune"
        },
        "cityState": "6",
        "address": "Gate 1, Azam Campus, Near Poona College, Camp Area, Pune",
        "locality": "Camp",
        "parentId": 21873,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "230621",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 500,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "466619",
        "name": "AK Chinese Corner",
        "uuid": "8ad84afc-b654-409a-a43d-29b631e08491",
        "city": "6",
        "area": "Camp",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "o3xwpaxkdkkvgyuym2ub",
        "cuisines": [
        "Biryani",
        "Chinese",
        "North Indian"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 3,
        "slugs": {
        "restaurant": "ak-chinese-corner-camp-camp",
        "city": "pune"
        },
        "cityState": "6",
        "address": "2373,New Modikhana,L D Bhave Gas Agency,Camp Pune 411001",
        "locality": "L D Bhave Gas Agency",
        "parentId": 280292,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "466619",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "228565",
        "name": "Subhanallah Biryani House",
        "uuid": "58ca495b-2020-422b-9740-5d84e53f5bf4",
        "city": "6",
        "area": "Katad Khana",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "f2ejyvdnlhprvtqj0zzo",
        "cuisines": [
        "Biryani",
        "Chinese",
        "North Indian",
        "Mughlai",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 3,
        "slugs": {
        "restaurant": "subhanallah-biryani-house-camp-camp",
        "city": "pune"
        },
        "cityState": "6",
        "address": "Gate 1, Azam Campus, Near Poona College, Camp Area, Pune",
        "locality": "Camp",
        "parentId": 196247,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "228565",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 20,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "232125",
        "name": "Labbaik Biryani House",
        "uuid": "859cd51f-ec88-4f16-a26f-27f9b72f61c6",
        "city": "6",
        "area": "Katad Khana",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "upizypworbept3mlfgx8",
        "cuisines": [
        "Biryani",
        "North Indian"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 3,
        "slugs": {
        "restaurant": "labbaik-biryani-house-camp-camp",
        "city": "pune"
        },
        "cityState": "6",
        "address": "Gate 1, Azam Campus, Near Poona College, Camp Area, Pune",
        "locality": "Camp",
        "parentId": 122728,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "232125",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "2.6",
        "totalRatings": 20,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "232120",
        "name": "AK Caterers & Biryani House",
        "uuid": "cf7269cb-0748-48e1-935f-9a9320d5cab8",
        "city": "6",
        "area": "Katad Khana",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "kksvallqfgnbwj1mczm4",
        "cuisines": [
        "Biryani",
        "North Indian"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 3,
        "slugs": {
        "restaurant": "ak-caterers-&-biryani-house-camp-camp",
        "city": "pune"
        },
        "cityState": "6",
        "address": "2390 new modikhana gate number 1 Azam campus gate number 1 camp Pune 41001",
        "locality": "Camp",
        "parentId": 28418,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "232120",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.4",
        "totalRatings": 20,
        "new": false
        },
        "subtype": "basic",
        },
];

const burgerKing = {
    name: "Burger King",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/r0j1bjyaco1xj40ywxzw.jpg",
    cusines:["burgers","American"],
    rating:"4.2"
}

const RestrurantCardList = ({restaurant}) => {

    const {name,cloudinaryImageId,deliveryTime,cuisines} =  restaurant.data;

    return(
        <>
        <div className="card">
          <div className="image">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + 
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
const Body = () =>{
    return (
        <React.Fragment>
             
        

        <div className="container">
        <h3 className="text-center">Body Starts Here</h3>
          <div className="restraurant-section">
          <RestrurantCardList restaurant= {restraurantList[0]} />
          <RestrurantCardList restaurant= {restraurantList[1]} />
          <RestrurantCardList restaurant= {restraurantList[2]} />
          <RestrurantCardList restaurant= {restraurantList[3]} />
          <RestrurantCardList restaurant= {restraurantList[4]} />
          <RestrurantCardList restaurant= {restraurantList[5]} />
          </div>

        </div>

        </React.Fragment>
    );
};


const FooterComponent = () =>{
    return (
        <div className="footer">
          <div key="copyrightSection">
            <p className="text-white text-center mb-0">© 2023 FoodVilla - Developed By Sunil Mali </p>
          </div>
        </div>
    )
}
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
        
        <HeaderComponent />
        <Body/>
        <FooterComponent />
        </>
        
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);