import { CDN_URL } from "../utils/config";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, areaName } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100  hover:bg-gray-200">
      <img
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-logo"
        className="rounded-lg"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>

      <h4>{avgRating} stars</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
