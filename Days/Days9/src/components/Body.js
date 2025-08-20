
import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

const Body=()=>{

  const[searchText,setSearchText] = useState("");
    const{listOfRestaurant,filteredRestaurant} = useRestaurant();
  
  return listOfRestaurant.length === 0 ?(
    <Shimmer/>
  ):(<div className="container-body">
      <div className="filter-btn">
          <div className="search">
               <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
               <button className="search-btn" onClick={()=>{
                const filteredRestaurant= listOfRestaurant.filter((res)=>{
                  return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                  
                })
                console.log(filteredRestaurant)
                setFilteredRestaurant(filteredRestaurant)
               }}>Search</button>
          </div>
          <button onClick={()=>{
            const filterLogic = listOfRestaurant.filter((res)=>{
              return res.info.avgRating>4.3;
            })
            setFilteredRestaurant(filterLogic);
          }}>Top Restaurants</button>
      </div>
      <div className="restaurantContainer">
      {filteredRestaurant.map((restaurant)=>(
       <Link
       key={restaurant.info.id}
       to={"/restaurant/" + restaurant.info.id} ><RestaurantCard  data={restaurant}/></Link>
      ))}
      </div>
  </div>
  );
}
export default Body;