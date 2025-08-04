const RestaurantCard=(props)=>{
    const{data}= props;
    const{name,cuisines,costForTwo,avgRating,cloudinaryImageId}=data.info;
    const{deliveryTime}= data.info.sla
    return(
        <div className="res-card" style={{background:"#f0f0f0f"}}>  
        <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
           <h3>{name}</h3>
           <h3>{costForTwo}</h3>
           <h4>{cuisines.join(" , ")}</h4>
           <h4>⭐️{avgRating}</h4>
           <h4>{deliveryTime} min</h4>

        </div>
    )
}
export default RestaurantCard