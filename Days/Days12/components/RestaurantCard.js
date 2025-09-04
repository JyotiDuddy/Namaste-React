import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import userContext from "../utils/userContext";

const RestaurantCard=(props)=>{
    const{data}= props;
    const{name,cuisines,costForTwo,avgRating,cloudinaryImageId}=data.info;
    const{deliveryTime}= data.info.sla;
    const {loggedInUser}= useContext(userContext)
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg font-bold h-[520px] object-contain bg-gray-50 hover:bg-gray-200" >  
        <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}/>
           <h3 className="font-[30px]">{name}</h3>
           <h3>{costForTwo}</h3>
           <h4>{cuisines.join(" , ")}</h4>
           <h4>⭐️{avgRating}</h4>
           <h4>{deliveryTime} min</h4>
           <h4>User: {loggedInUser}</h4>

        </div>
    )
}

// Higher Order Component

// input-restaurantCard =>rrestaurantCardPromoted

// export const withVegLabel=(RestaurantCard)=>{
//     return(props)=>{
//          console.log(props);
//         return(
//             <div>
//                 <label>subHeader</label>
//                 <RestaurantCard  {...props}/>
//             </div>
//         )
//     }
// }
export default RestaurantCard