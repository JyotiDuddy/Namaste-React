import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams()
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      MENU_API+resId
     );


    const json = await data.json();

    setResInfo(json?.data);
  };
  if (resInfo === null) return <Shimmer />;


  const { name, cuisines, costForTwo } =
    resInfo?.cards[2]?.card?.card?.info ;

  console.log(resInfo);
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
    ?.cards[6]?.card?.card ;
    console.log(itemCards)

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(" , ")}</h2>
      <h2>{costForTwo / 100} for two</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
