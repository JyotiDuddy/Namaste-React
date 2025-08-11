import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [filteredItem, setFilteredItem] = useState(resList);
  const [search, setSearch] = useState("");
  const[serachItem,setSearchItem] = useState(filteredItem)
  console.log(search);
  // whenever state variables update, react triggeres a reconcillation cycle (re-renders the components)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://swiggy-api-4c740.web.app/swiggy-api.json`
    );
    const json = await data.json();

    setFilteredItem(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return filteredItem.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => {
const searchItem= filteredItem.filter((item)=>item.info.name.toLowerCase().includes(search.toLowerCase()))
          setSearchItem(searchItem)
        }
        }>
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurant = resList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredItem(filteredRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {serachItem.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
