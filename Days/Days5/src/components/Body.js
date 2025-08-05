import { useState } from "react";
import resList from "../utils/mockData";



import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const[filteredItem,setFilteredItem] = useState(resList)
  // const TopRatedRestaurant = filteredItem.length> 0 ? filteredItem :resList
  return (
    <div className="body">
      <div className="filter"> 
        <button className="filter-btn" onClick={()=>{
            const filteredRestaurant= resList.filter((res)=>res.info.avgRating > 4.2);
            setFilteredItem(filteredRestaurant)
        }}>Top Rated Restaurant</button>
      </div>

      <div className="res-container">
        {filteredItem.map((restaurant)=><RestaurantCard  key={restaurant.info.id} data={restaurant}/>)}

 
      </div>
    </div>
  );
};
export default Body;
