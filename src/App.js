import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";



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
