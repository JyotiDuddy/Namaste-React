
import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard  from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";


const Body=()=>{
   const[input,setInput] = useState("")
  const[searchText,setSearchText] = useState("");
    const{listOfRestaurant,filteredRestaurant,setFilteredRestaurant} = useRestaurant();
    console.log(
      listOfRestaurant
    )

  return listOfRestaurant.length === 0 ?(
 <p>Loading...</p>
  ):(<div className="container-body">
      <div  >
          <div  className="flex justify-center items-center" > 
               <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}  className="flex justify-center items-center border border-gray-400" />
               <button className="search-btn" onClick={()=>{
                const filteredRestaurant= listOfRestaurant.filter((res)=>{
                  return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                  
                })
                console.log(filteredRestaurant)
                setFilteredRestaurant(filteredRestaurant)
               }}>Search</button>
          </div>
          <button  className="flex justify-center align-items border border-b-2 bg-slate-500 margin-auto" onClick={()=>{
            const filterLogic = listOfRestaurant.filter((res)=>{
              return res.info.avgRating>4.3;
            })
            setFilteredRestaurant(filterLogic);
          }}>Top Restaurants</button>
      </div>
      <div className="m-4 p-4 flex items-center">
        <label>UserName</label>
        
          <input className="border border-black "  value={input} onChange={(e)=>setInput(e.target.value)}/>
      </div>
      <div className="flex flex-wrap ">
      {filteredRestaurant.map((restaurant)=>(
       <Link
       key={restaurant.info.id}
       to={"/restaurant/" + restaurant.info.id} >
        <RestaurantCard  data={restaurant}/>
     
        </Link>
      ))}
      </div>
  </div>
  );
}
export default Body;