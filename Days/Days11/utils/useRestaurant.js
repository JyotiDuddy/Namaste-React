import React ,{useState,useEffect} from "react";

const useRestaurant=()=>{
   const[listOfRestaurant,setListOfRestaurant] = useState([]);
   const[filteredRestaurant,setFilteredRestaurant] = useState(listOfRestaurant);

    useEffect(()=>{
    fetchData();
  },[]);
  const fetchData=async()=>{
    const data= await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
    const json= await data.json();
    console.log(json?.data?.cards)
      
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const restaurants= json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
    
  }
  return {listOfRestaurant,filteredRestaurant, setFilteredRestaurant}
      
}
export default useRestaurant;