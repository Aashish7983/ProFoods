import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link} from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { DATA_URL } from "../utils/config";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const RestaurantWithPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  
      const data = await fetch(DATA_URL);
      const json = await data.json();
      console.log("DataWiggy",json.data);
      setRestaurantList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    }


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you're Offline, please check your internet connection</h1>


  return restaurantList && restaurantList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="p-4 m-4">
          <input
          className="border border-solid border-black p-1 rounded-lg"
            placeholder="Search your Restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterSearch = restaurantList.filter((rest) =>
                rest?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filterSearch);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (rest) => rest.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link className="link" key={restaurant?.info?.id} to={`/restaurant/${restaurant?.info?.id}`}>
            <RestaurantCard resData={restaurant} /> 
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;