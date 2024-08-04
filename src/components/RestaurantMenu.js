// import React, { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  try {
    const firstCard = resInfo.cards?.[0]?.card?.card;
    const info = firstCard?.info;
    const { name} = info || {};

    const groupedCard =
      resInfo.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card;
    const itemCards = groupedCard?.itemCards || [];
    console.log("Menu",resInfo.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    return (
      <div className="text-center">
        <h2>Recommended</h2>
        <h1>{name}</h1>
        {itemCards.length > 0 ? (
          <ul>
            {itemCards.map((res) => (
              <li key={res?.card?.info?.id}>{res?.card?.info?.name} - {res?.card?.info?.price/100} rs</li>
            ))}
          </ul>
        ) : (
          <p>No menu items available</p>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error rendering menu:", error);
    return <p>Error rendering menu</p>;
  }
};

export default RestaurantMenu;