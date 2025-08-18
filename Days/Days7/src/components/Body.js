import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body=()=>{
  const[listOfRestaurant,setListOfRestaurant] = useState([]);
  const[filteredRestaurant,setFilteredRestaurant] = useState(listOfRestaurant);
  const[searchText,setSearchText] = useState("");

  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData=async()=>{
    const data= await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4794366&lng=77.01758319999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
    const json= await data.json();
      
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }
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