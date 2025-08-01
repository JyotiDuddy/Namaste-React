import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
  return(
   <div className="header">
        <h1 className="logo">
          <span className="big-z">
             Z
          </span>
          <span className="small-text">estyBite</span>
          </h1>
          <div>
            <ul className="nav-items">
              <li className="nav-item">Home</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Contact</li>
              <li className="nav-item">Cart</li>
            </ul>

          </div>
          <div className="cart"> 
            <h2>Cart</h2>
          </div>
   </div>
  )

}

     const restaurantList = [
  {
    imageId: "176324",
    imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gdx7cwbiblnkz6tivztq",
    name:  "Hotel Vaishno Mahal",
  cloudinaryImageId: "gdx7cwbiblnkz6tivztq",
    avgRating: "4.3",
    cuisines: ["North Indian", "Thalis","Tandoor","Chinese", "Beverages" ],          
    costForTwo: "₹350",
    deliveryTime: "25 mins"
  },
  {
    imageId: "176322",
    imageUrl: 
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yrup2ynbpa1zvysrwxsp",
    name: "Hotel Mini Mahal",
    cloudinaryImageId: "yrup2ynbpa1zvysrwxsp",
    avgRating: "4.2",
    cuisines: ["South Indian","Chinese","Thalis","Sweets"],
    costForTwo: "₹250",
    deliveryTime: "20 mins"
  },
  {
    imageId: "170564",
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yrup2ynbpa1zvysrwxsp",
    name: "Gole Hatti Sweets & Snacks",
    cloudinaryImageId: "moftapxj1ocjfgwawwuz",
    avgRating: "4.7",
    cuisines: ["Snacks","Sandwich","Chinese","North Indian"],
    costForTwo: "₹150",
    deliveryTime: "34 mins"
  },
  {
    imageId: "171328",
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8f6107dbf634fda13e867e67e8e2b160",
    name: "Baba Pizza Cafe",
    cloudinaryImageId: "8f6107dbf634fda13e867e67e8e2b160",
    avgRating: "4.1",
    cuisines: ["Pizza","Burgers","Bakery","Chinese"],
    costForTwo: "₹300",
    deliveryTime: "28 mins"
  },
  {
    imageId: "170558",
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2778271edf5dc47edde27ffcf71f7485",
    name: "Hotel Taj",
    cloudinaryImageId: "2778271edf5dc47edde27ffcf71f7485",
    avgRating: "4.3",
    cuisines: ["Thalis","South Indian","Chinese","Indian"],
    costForTwo: "₹250",
    deliveryTime: "39 mins"
  },
  {
    imageId: "192473",
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dnvekdljtl1fzrzazm8o",
    name: "Dosa King",
    avgRating: "4.1",
    cuisines: ["South Indian","Healthy Food"],
    costForTwo: "₹550",
    deliveryTime: "30 mins"
  },
  {
    imageId: "171348",
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dnvekdljtl1fzrzazm8o",
    name: "Silver Spoon",
    avgRating: "4",
    cuisines: ["South Indian","Fast Food","Chinese"],
    costForTwo: "₹300",
    deliveryTime: "34 mins"
  },
  {
    imageId: "390625",
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dnvekdljtl1fzrzazm8o",
    name: "Bunny`s Kitchen",
    avgRating: "4.3",
    cuisines: ["Italian","Pizzas"],
    costForTwo: "₹600",
    deliveryTime: "31 mins"
  },
  {
    imageId: "170563",
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/llk8g550s3jdolrqxdae",
    name: "Kaka Bakery",
    cloudinaryImageId: "llk8g550s3jdolrqxdae",
    avgRating: "4.3",
    cuisines: ["Bakery", "Snacks", "Cakes& Pasteries"],
    costForTwo: "₹400",
    deliveryTime: "25 mins"
  },
  {
    imageId: "238259",
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pifuhflcnv13vbufbzdu",
    name: "Batra`s Mahal",
    cloudinaryImageId: "pifuhflcnv13vbufbzdu",
    avgRating: "4.3",
    cuisines: ["South Indian","North Indian", "Thalis"],
    costForTwo: "₹250",
    deliveryTime: "26 mins"
  },
  {
    imageId: "244205",
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tolyvibp7sjucgoxx130",
    name: "Saini Vishno Bhajnalaya",
    cloudinaryImageId: "tolyvibp7sjucgoxx130",
    avgRating: "4.1",
    cuisines: ["North Indian","Thalis"],
    costForTwo: "₹250",
    deliveryTime: "50 mins"
  },
  {
    imageId: "170571",
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gohdklqunugalzer60me",
    name: "Aashirwad Sweets & Restaurant",
    cloudinaryImageId: "gohdklqunugalzer60me",
    avgRating: "3.8",
    cuisines: ["North Indian","Bakery","Chinese"],
    costForTwo: "₹400",
    deliveryTime: "22 mins"
  }
];

     const RestaurantCard = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => (
        <div className="restaurant-card" key={restaurant.imageId}>
          <img src={restaurant.imageUrl} alt={restaurant.name} className="restaurant-img" />
          <h2 className="restaurant-name">{restaurant.name}</h2>
          <h3 className="restaurant-rating">⭐ {restaurant.avgRating}</h3>
          <h3 className="restaurant-cuisisne">{restaurant.cuisines.join(", ")}</h3>
          <h3 className="restaurant-price-time">{restaurant.costForTwo} | {restaurant.deliveryTime}</h3>

        </div>
      ))}
    </div>
  );
};
     
        

const Restaurant=()=>{
  return(
   <RestaurantCard/>
  )
}
const Body=()=>{
   return(
    <div>
      <div>Search</div>
      <Restaurant/>
    </div>
   )
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
