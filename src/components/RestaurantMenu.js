import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const[showIndex,setShowIndex] = useState( )
    const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  

  console.log(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
  console.log(name, cuisines, costForTwo);

  console.log(resInfo);
  const {itemCards}  =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  console.log(itemCards);
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">{cuisines?.join(" , ")}</h2>
     {/* {categories accordian} */}
     {categories.map((category, index)=>
     <div key={category?.card?.card?.categoryId}>
            <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} show={index === showIndex && true} setShowIndex={()=>setShowIndex(index)}/>
   </div>

      )}

    </div>
  );
};
export default RestaurantMenu;
