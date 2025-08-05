import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    const{data}= props;
    const{name,cuisines,costForTwo,avgRating,cloudinaryImageId}=data.info;
    const{deliveryTime}= data.info.sla
    return(
        <div className="res-card" style={{background:"#f0f0f0"}}>  
        <img className="res-logo" src={CDN_URL + cloudinaryImageId}/>
           <h3>{name}</h3>
           <h3>{costForTwo}</h3>
           <h4>{cuisines.join(" , ")}</h4>
           <h4>⭐️{avgRating}</h4>
           <h4>{deliveryTime} min</h4>

        </div>
    )
}
export default RestaurantCard