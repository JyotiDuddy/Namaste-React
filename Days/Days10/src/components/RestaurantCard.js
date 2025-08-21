import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    const{data}= props;
    const{name,cuisines,costForTwo,avgRating,cloudinaryImageId}=data.info;
    const{deliveryTime}= data.info.sla
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg font-bold h-[520px] object-contain bg-gray-50 hover:bg-gray-200" >  
        <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}/>
           <h3 className="font-[30px]">{name}</h3>
           <h3>{costForTwo}</h3>
           <h4>{cuisines.join(" , ")}</h4>
           <h4>⭐️{avgRating}</h4>
           <h4>{deliveryTime} min</h4>

        </div>
    )
}
export default RestaurantCard